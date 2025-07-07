import Icon from '@components/icon/icon';
<<<<<<< HEAD
import { LOTTIE_PATH } from '@constants/lotties';
import KakaoButton from '@pages/login/components/kakao-button';
import { Lottie } from '@toss/lottie';

const Login = () => {
  return (
    <div className="h-screen flex-col-between px-[1.6rem] pt-[8rem] pb-[4.8rem]">
      <div className="w-[29.5rem] flex-col-center">
        <Icon name="logo-gray" width={16.5} height={4.5} />
        <Lottie src={LOTTIE_PATH.LOGIN} loop={true} />
        <div className="flex-col-center">
          <h2 className="title_24_sb text-gray-800">나랑 딱! 맞는</h2>
          <h2 className="title_24_sb text-gray-800">직관 메이트와 연결되는 공간</h2>
        </div>
      </div>
      <KakaoButton />
=======
import graphic from '@img/graphic.png';

const Login = () => {
  return (
    <div className="h-screen flex-col-center gap-[7.2rem]">
      <h1 className="head_20_sb text-gray-black">당신의 직관 메이트를 찾아드립니다</h1>
      <img src={graphic} alt="임시 이미지" className="h-[16rem] w-[16rem]" />
      <button
        type="button"
        aria-label="카카오 로그인"
        className="subhead_18_sb flex w-[34.3rem] cursor-pointer items-center rounded-[0.8rem] bg-kakao-brand px-[1.6rem] py-[1.2rem]"
      >
        <Icon name="ic-kakao-logo" width={2.4} height={2.4} className="shrink-0" />
        <p className="flex-1">카카오 로그인</p>
      </button>
>>>>>>> cdc659b (fix: 로그인 페이지 login.tsx로 이동 (#67))
    </div>
  );
};

export default Login;
