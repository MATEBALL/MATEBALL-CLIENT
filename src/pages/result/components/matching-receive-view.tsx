import { alarmMutations } from '@apis/alarm/alarm-mutations';
import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import type { ChipColor, DetailedCardProps } from '@components/card/match-card/types/card';
import { MATCH_KEY } from '@constants/query-key';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import queryClient from '@libs/query-client';
import ErrorView from '@pages/error/error-view';
import { fillTabItems } from '@pages/match/utils/match-status';
import { ERROR_MESSAGE, MATCHING_HEADER_MESSAGE } from '@pages/result/constants/matching-result';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const MatchingReceiveView = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const cardType = params.get('cardtype');
  const isGroupMatching = cardType === 'group';

  usePreventBackNavigation(
    `${ROUTES.MATCH}?tab=${cardType === 'group' ? '그룹' : '1:1'}&filter=전체`,
  );

  const parsedId = Number(matchId);
  const { mutate: acceptMatch } = useMutation(matchMutations.MATCH_ACCEPT());
  const { mutate: readAlarm } = useMutation(alarmMutations.READ_ALARM());
  const { mutate: rejectMatch } = useMutation(matchMutations.MATCH_REJECT());
  const { data, isError } = useQuery(matchQueries.MATCH_DETAIL(parsedId, true));

  const mate = data?.mates?.[0];

  if (isError || !mate) {
    return <ErrorView message={ERROR_MESSAGE} />;
  }

  const detailedCard: DetailedCardProps = {
    ...mate,
    type: 'detailed',
    imgUrl: [mate.imgUrl],
    chips: [mate.team, mate.style].filter(Boolean) as ChipColor[],
  };

  const handleReject = () => {
    rejectMatch(parsedId, {
      onSuccess: () => {
        navigate(`${ROUTES.RESULT(matchId)}?type=fail`);
        fillTabItems.forEach((label) => {
          queryClient.invalidateQueries({ queryKey: MATCH_KEY.STATUS.SINGLE(label) });
          queryClient.invalidateQueries({ queryKey: MATCH_KEY.STATUS.GROUP(label) });
        });
      },
      onError: () => {
        navigate(ROUTES.ERROR);
      },
    });
  };

  const handleAccept = () => {
    acceptMatch(parsedId, {
      onSuccess: () => {
        readAlarm(parsedId, {
          onSuccess: () => {
            if (cardType === 'group') {
              navigate(`${ROUTES.MATCH}?tab=그룹&filter=전체`);
            } else {
              navigate(`${ROUTES.RESULT(matchId)}?type=success`);
            }
          },
          onError: () => {
            navigate(ROUTES.ERROR);
          },
        });

        fillTabItems.forEach((label) => {
          queryClient.invalidateQueries({ queryKey: MATCH_KEY.STATUS.SINGLE(label) });
          queryClient.invalidateQueries({ queryKey: MATCH_KEY.STATUS.GROUP(label) });
        });
      },
      onError: () => {
        navigate(ROUTES.ERROR);
      },
    });
  };

  return (
    <div className="h-full flex-col-between overflow-hidden">
      <div className="w-full flex-col-center gap-[4rem] px-[1.6rem] pt-[4rem]">
        <section className="gap-[0.8rem] text-center">
          <h1 className="title_24_sb text-gray-black">{MATCHING_HEADER_MESSAGE.description}</h1>
          <p className="body_16_m whitespace-pre-line text-gray-600">
            {isGroupMatching
              ? MATCHING_HEADER_MESSAGE.group.subDescription
              : MATCHING_HEADER_MESSAGE.single.subDescription}
          </p>
        </section>
        <Card {...detailedCard} className="w-full" />
      </div>

      <section className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          size="L"
          variant="skyblue"
          className="w-full"
          label="요청 거절하기"
          onClick={handleReject}
        />
        <Button size="L" className="w-full" label="요청 수락하기" onClick={handleAccept} />
      </section>
    </div>
  );
};

export default MatchingReceiveView;
