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
        name="logo"
        height={2.5}
        width={9.2}
        onClick={handleLogoClick}
        className="cursor-pointer"
      />
    );
  }

  const urlParams = new URLSearchParams(location.search);
  const isResultFail = location.pathname === '/result' && urlParams.get('type') === 'fail';

  if (isFail || isResultFail) {
    return <Icon name="ic-arrow-left-white" onClick={handleBackClick} width={2.4} height={2.4} />;
  }

  return (
    <Icon
      name="ic-arrow-left-24"
      width={2.4}
      height={2.4}
      onClick={handleBackClick}
      className="cursor-pointer"
    />
  );
};
