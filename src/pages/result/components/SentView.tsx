import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

export default function SentView() {
  const navigate = useNavigate();

  return (
    <div className="relative flex-col-center gap-[4rem] px-[1.6rem] pt-[4rem] pb-[8rem] max-h-screen">
      <h2 className="title_24_sb">매칭 요청이 전송되었어요!</h2>
      <Lottie src={LOTTIE_PATH.SEND} loop={true} />
      <p className="body_16_m text-center text-gray-600">
        모든 그룹원이 수락하면 그룹원이 됩니다. <br />
        ‘매칭 현황’에서 실시간으로 확인할 수 있어요.
      </p>
      <div className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 p-[1.6rem] flex-row-center gap-[0.8rem]">
        <Button label="메이트 더 찾아보기" onClick={() => navigate(-1)} />
        <Button label="매칭 현황 보기" onClick={() => navigate(ROUTES.MATCH)} />
      </div>
    </div>
  );
}
