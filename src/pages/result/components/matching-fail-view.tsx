import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

const MatchingFailView = () => {
  const navigate = useNavigate();
  usePreventBackNavigation(ROUTES.MATCH);

  return (
    <div className="h-svh flex-col-between">
      <section className="flex-col-center gap-[4rem] px-[1.6rem] pt-[4rem]">
        <h2 className="title_24_sb text-gray-white">요청을 거절하셨습니다.</h2>
        <div className="h-[16rem] w-[16rem] flex-row-center">
          <Lottie src={LOTTIE_PATH.FAIL} loop={true} className="w-[16rem]" />
        </div>
        <p className="body_16_m text-center text-gray-600">
          딱! 맞는 메이트의 요청이 도착하면 <br />
          ‘매칭 현황’에서 확인할 수 있어요.
        </p>
      </section>
      <section className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button label="매칭 현황 보기" className="w-full" onClick={() => navigate(ROUTES.MATCH)} />
      </section>
    </div>
  );
};

export default MatchingFailView;
