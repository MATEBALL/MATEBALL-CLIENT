import Icon from '@components/icon/icon';
import { ROUTES } from '@routes/routes-config';
import type { NavigateFunction } from 'react-router-dom';

export const getHeaderContent = (
  pathname: string,
  urlParams: URLSearchParams,
  isFail: boolean,
  navigate: NavigateFunction,
) => {
  const handleLogoClick = () => {
    if (navigate) navigate(ROUTES.HOME);
  };

  const handleBackClick = () => {
    const type = urlParams.get('type') ?? '';
    const goMatchTypes = ['fail', 'agree', 'success', 'receive'];

    if (pathname === ROUTES.RESULT()) {
      if (type === 'sent') {
        navigate(ROUTES.HOME);
        return;
      }

      if (goMatchTypes.includes(type)) {
        navigate(ROUTES.MATCH);
        return;
      }
    }

    navigate(-1);
  };

  const handleChatClick = () => {
    navigate(ROUTES.CHAT);
  };

  if (pathname === ROUTES.HOME) {
    return (
      <Icon
        name="logo"
        height={2.5}
        width={9.2}
        onClick={handleLogoClick}
        className="cursor-pointer"
      />
    );
  }

  if (pathname === ROUTES.MATCH) {
    return <h1 className="head_20_sb text-gray-black">매칭 현황</h1>;
  }

  if (pathname === ROUTES.PROFILE) {
    return <h1 className="head_20_sb text-gray-black">내 정보</h1>;
  }

  if (pathname === ROUTES.CHAT) {
    return <h1 className="head_20_sb text-gray-black">채팅</h1>;
  }

  if (pathname === ROUTES.CHAT_ROOM) {
    return (
      <div className="flex items-center gap-[0.8rem]">
        <Icon name="arrow-left-24" onClick={handleChatClick} className="cursor-pointer" />
        <h1 className="subhead_18_sb">롯데샌드</h1>
        <div className="flex items-center gap-[0.4rem] text-gray-700">
          <Icon name="baseball" size={1.6} />
          <p className="cap_12_m">롯데 vs LG</p>
        </div>
      </div>
    );
  }

  if (isFail) {
    return <Icon name="arrow-left-white" onClick={handleBackClick} width={2.4} height={2.4} />;
  }

  return (
    <Icon
      name="arrow-left-24"
      width={2.4}
      height={2.4}
      onClick={handleBackClick}
      className="cursor-pointer"
    />
  );
};
