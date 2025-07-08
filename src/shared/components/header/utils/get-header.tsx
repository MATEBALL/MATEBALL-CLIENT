import Icon from '@components/icon/icon';
import { ROUTES } from '@routes/routes-config';
import type { NavigateFunction } from 'react-router-dom';

export const getHeaderContent = (
  pathname: string,
  isFail: boolean,
  navigate?: NavigateFunction,
) => {
  const handleLogoClick = () => {
    if (navigate) navigate(ROUTES.HOME);
  };

  const handleBackClick = () => {
    if (navigate) navigate(-1);
  };

  if (pathname === ROUTES.HOME) {
    return (
      <Icon
        name="ic-logo"
        height={2.5}
        width={9.2}
        onClick={handleLogoClick}
        className="cursor-pointer"
      />
    );
  }

  if (pathname === ROUTES.MATCH) {
    return <h1 className="head_20_sb text-gray-black">매칭현황</h1>;
  }

  if (isFail) {
    return <Icon name="ic-arrow-left-white" onClick={handleBackClick} width={2.4} height={2.4} />;
  }

  return (
    <Icon
      name="ic-arrow-left"
      width={2.4}
      height={2.4}
      onClick={handleBackClick}
      className="cursor-pointer"
    />
  );
};
