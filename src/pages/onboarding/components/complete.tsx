import { LOTTIE_PATH } from '@constants/lotties';
import { Lottie } from '@toss/lottie';

const Complete = () => {
  return (
    <div className="mt-[1.6rem] flex-col-center gap-[4rem]">
      <p className="title_24_sb text-center text-gray-black">
        매칭 조건 설정이
        <br />
        모두 완료되었어요.
      </p>

      <Lottie src={LOTTIE_PATH.AGREE} loop={true} width="16rem" height="16rem" />

      <p className="body_16_m text-center text-gray-600">
        날짜를 선택해 맞춤 매칭을 생성하거나
        <br />
        나와 딱 맞는 메이트를 찾아 보세요.
      </p>
    </div>
  );
};

export default Complete;
