import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import type { ChipColor, DetailedCardProps } from '@components/card/match-card/types/card';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import ErrorView from '@pages/error/error-view';
import { ERROR_MESSAGE, MATCHING_HEADER_MESSAGE } from '@pages/result/constants/matching-result';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

interface MatchingReceiveViewProps {
  isGroupMatching?: boolean;
}

const MatchingReceiveView = ({ isGroupMatching = true }: MatchingReceiveViewProps) => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const cardType = params.get('cardtype');

  usePreventBackNavigation(
    `${ROUTES.MATCH}?tab=${cardType === 'group' ? '그룹' : '1:1'}&filter=전체`,
  );

  const parsedId = Number(matchId);
  const { mutate: acceptMatch } = useMutation(matchMutations.MATCH_ACCEPT());
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
      },
      onError: (error) => {
        console.error('매칭 거절 실패:', error);
        navigate(ROUTES.ERROR);
      },
    });
  };

  const handleAccept = () => {
    acceptMatch(parsedId, {
      onSuccess: () => {
        const resultType = cardType === 'group' ? 'agree' : 'success';
        navigate(`${ROUTES.RESULT(matchId)}?type=${resultType}`);
      },
      onError: (error) => {
        console.error('매칭 수락 실패:', error);
        navigate(ROUTES.ERROR);
      },
    });
  };

  return (
    <div className="h-full flex-col-between overflow-hidden">
      <div className="w-full flex-col-center gap-[4rem] px-[1.6rem] pt-[4rem]">
        <section className="gap-[0.8rem] text-center">
          <h1 className="title_24_sb text-gray-black">{MATCHING_HEADER_MESSAGE.description}</h1>
          <p className="body_16_m text-gray-600">
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
