import Icon from '@components/icon/icon';

const KakaoButton = () => {
  const REST_API = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button
      onClick={handleLogin}
      type="button"
      aria-label="카카오 로그인"
      className="subhead_18_sb flex w-full cursor-pointer items-center rounded-[0.8rem] bg-kakao-brand px-[1.6rem] py-[1.2rem]"
    >
      <Icon name="kakao-logo" className="shrink-0" />
      <p className="flex-1">카카오 로그인</p>
    </button>
  );
};

export default KakaoButton;
