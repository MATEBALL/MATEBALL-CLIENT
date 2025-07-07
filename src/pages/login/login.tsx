import graphic from '@img/graphic.png';
import KakaoButton from '@pages/login/components/kakao-button';

const Login = () => {
  return (
    <div className="h-screen flex-col-center gap-[7.2rem]">
      <h1 className="head_20_sb text-gray-black">당신의 직관 메이트를 찾아드립니다</h1>
      <img src={graphic} alt="임시 이미지" className="h-[16rem] w-[16rem]" />
      <KakaoButton />
    </div>
  );
};

export default Login;
