import Icon from '@components/icon/icon';

const KakaoButton = () => {
  return (
    <button
      type="button"
      aria-label="카카오 로그인"
      className="subhead_18_sb flex w-[34.3rem] cursor-pointer items-center rounded-[0.8rem] bg-kakao-brand px-[1.6rem] py-[1.2rem]"
    >
      <Icon name="ic-kakao-logo" width={2.4} height={2.4} className="shrink-0" />
      <p className="flex-1">카카오 로그인</p>
    </button>
  );
};

export default KakaoButton;
