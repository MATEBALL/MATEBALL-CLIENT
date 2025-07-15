import { LOTTIE_PATH } from '@constants/lotties';
import { Lottie } from '@toss/lottie';

const Start = () => {
  return (
    <div className="flex-col-between gap-[4rem]">
      <p className="title_24_sb p-[4rem] text-gray-black">환영합니다!</p>
      <Lottie src={LOTTIE_PATH.WELCOME} loop={true} width="16rem" height="16rem" />
      <p className="body_16_m text-center text-gray-600">
        원하는 조건을 선택하고
        <br />
        나와 딱! 맞는 직관 메이트를 찾아보세요.
      </p>
    </div>
  );
};

export default Start;
