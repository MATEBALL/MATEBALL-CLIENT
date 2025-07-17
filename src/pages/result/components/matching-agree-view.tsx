import { matchQueries } from '@apis/match/match-queries';
import Button from '@components/button/button/button';
import MatchCurrentCard from '@components/card/match-current-card/match-current-card';
import { LOTTIE_PATH } from '@constants/lotties';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import { ROUTES } from '@routes/routes-config';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Lottie } from '@toss/lottie';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface MatchingAgreeViewProps {
  matchId: string;
}

const MatchingAgreeView = ({ matchId }: MatchingAgreeViewProps) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const cardType = params.get('cardtype');
  usePreventBackNavigation(
    `${ROUTES.MATCH}?tab=${cardType === 'group' ? '그룹' : '1:1'}&filter=전체`,
  );

  const { data: agreeData } = useSuspenseQuery(matchQueries.COUNTED_MEMBER(Number(matchId)));
  const matchedCount = agreeData?.count;

  return (
    <div className="h-full flex-col-between gap-[2.4rem] px-[1.6rem]">
      <div className="flex-col-center gap-[2.4rem] pt-[4rem]">
        <h2 className="title_24_sb text-center">매칭 수락이 완료되었습니다.</h2>
        <div className="flex-col-center gap-[1.6rem]">
          <div className="h-[16rem] w-[16rem] flex-row-center">
            <Lottie src={LOTTIE_PATH.AGREE} loop={true} className="w-[16rem]" />
          </div>
          <MatchCurrentCard count={matchedCount} />
        </div>
        <p className="body_16_m text-center text-gray-800">
          이제 그룹원이 되어 요청을 수락할 수 있어요. <br />
          ‘매칭 현황’에서 확인해보세요!
        </p>
      </div>
      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          label="메이트 더 찾아보기"
          variant="skyblue"
          onClick={() => navigate(ROUTES.HOME)}
        />
        <Button label="매칭 현황 보기" onClick={() => navigate(ROUTES.MATCH)} />
      </div>
    </div>
  );
};

export default MatchingAgreeView;
