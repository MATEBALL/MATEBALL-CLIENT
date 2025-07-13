import Button from '@components/button/button/button';
import MatchCurrentCard from '@components/card/match-current-card/match-current-card';
import { LOTTIE_PATH } from '@constants/lotties';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

const MatchingAgreeView = () => {
  const navigate = useNavigate();

  // TODO: 실제 매칭된 인원 상태에서 받아오기
  const matchedCount = 3;

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
      <div className="flex-row-center gap-[0.8rem] p-[1.6rem]">
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
