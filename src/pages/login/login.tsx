import Icon from '@components/icon/icon';
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
    </div>
  );
};

export default Login;
