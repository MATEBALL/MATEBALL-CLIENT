import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import { MATCHING_COMPLETE_MESSAGE } from '@pages/match/constants/matching';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

interface SentViewProps {
  isGroupMatching?: boolean;
}

const SentView = ({ isGroupMatching = true }: SentViewProps) => {
  usePreventBackNavigation(ROUTES.HOME);

  const navigate = useNavigate();
  const handleGoHome = () => navigate(ROUTES.HOME);
  const handleGoMatch = () => navigate(ROUTES.MATCH);

  return (
    <div className="h-full flex-col-between">
      <section className="flex-col-center gap-[4rem] pt-[4rem]">
        <h2 className="title_24_sb">매칭 요청이 전송되었어요!</h2>
        <div className="h-[16rem] w-[16rem] flex-row-center">
          <Lottie src={LOTTIE_PATH.SEND} loop={true} className="w-[16rem]" />
        </div>
        <p className="body_16_m text-center text-gray-600">
          {isGroupMatching ? MATCHING_COMPLETE_MESSAGE.group : MATCHING_COMPLETE_MESSAGE.single}
          <br />
          진행 과정은 ‘매칭 현황'에서 확인할 수 있어요!
        </p>
      </section>
      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button label="메이트 더 찾아보기" variant="skyblue" onClick={handleGoHome} />
        <Button label="매칭 현황 보기" onClick={handleGoMatch} />
      </div>
    </div>
  );
};

export default SentView;
