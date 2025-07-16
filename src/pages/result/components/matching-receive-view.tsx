import { matchMutations } from '@apis/match/match-mutations';
import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import { mockMateReceive } from '@mocks/mockMatchReceiveData';
import { MATCHING_HEADER_MESSAGE } from '@pages/result/constants/matching-result';
import { ROUTES } from '@routes/routes-config';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

interface MatchingReceiveViewProps {
  isGroupMatching?: boolean;
}

const MatchingReceiveView = ({ isGroupMatching = true }: MatchingReceiveViewProps) => {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const [params] = useSearchParams();
  const cardType = params.get('cardtype');

  usePreventBackNavigation(ROUTES.MATCH);

  const { mutate: acceptMatch } = useMutation(matchMutations.MATCH_ACCEPT());

  const handleReject = () => {
    navigate(`${ROUTES.RESULT(matchId)}?type=fail`);
  };

  const handleAccept = () => {
    acceptMatch(Number(matchId), {
      onSuccess: () => {
        if (cardType === 'group') {
          navigate(`${ROUTES.RESULT(matchId)}?type=agree`);
        } else {
          navigate(`${ROUTES.RESULT(matchId)}?type=success`);
        }
      },
      onError: (error) => {
        console.error('매칭 수락 실패:', error);
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
        <Card {...mockMateReceive} type="detailed" className="w-full" />
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
