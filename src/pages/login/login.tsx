import Icon from '@components/icon/icon';
import { LOTTIE_PATH } from '@constants/lotties';
import KakaoButton from '@pages/login/components/kakao-button';
import { Lottie } from '@toss/lottie';

const Login = () => {
  return (
    <div className="h-screen flex-col-between px-[1.6rem] pt-[8rem] pb-[4.8rem]">
      <div className="w-[29.5rem] flex-col-center">
        <Icon name="logo-gray" width={16.5} height={4.5} className="text-main-900" />
        <Lottie src={LOTTIE_PATH.LOGIN} loop={true} />
        <div className="flex-col-center">
          <h2 className="title_24_sb text-gray-800">나랑 딱! 맞는</h2>
          <h2 className="title_24_sb text-gray-800">직관 메이트와 연결되는 공간</h2>
        </div>
      </div>
      <KakaoButton />
    </div>
  );
};

export default Login;
