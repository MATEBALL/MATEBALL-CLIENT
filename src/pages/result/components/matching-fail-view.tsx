import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

const MatchingFailView = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full max-h-screen bg-gray-black">
      <div className="flex-col-center gap-[4rem] px-[1.6rem] pt-[4rem]">
        <h2 className="title_24_sb text-gray-white">요청을 거절하셨습니다.</h2>
        <Lottie src={LOTTIE_PATH.FAIL} loop />
        <p className="body_16_m text-center text-gray-600">
          잘 맞는 메이트의 요청이 도착하면 알려드릴게요. <br />
          ‘매칭 현황’에서 실시간으로 확인할 수 있어요!
        </p>
        <div className="-translate-x-1/2 fixed bottom-0 left-1/2 w-full max-w-[430px] flex-row-center gap-[0.8rem] p-[1.6rem]">
          <Button label="매칭현황 보기" className="w-full" onClick={() => navigate(ROUTES.MATCH)} />
        </div>
      </div>
    </div>
  );
};

export default MatchingFailView;
