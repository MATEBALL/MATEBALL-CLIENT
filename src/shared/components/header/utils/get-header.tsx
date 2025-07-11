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
    navigate(ROUTES.HOME);
  };

  const handleBackClick = () => {
    const type = urlParams.get('type');
    const goMatchTypes = ['fail', 'agree', 'success', 'receive'];

    if (pathname === ROUTES.RESULT) {
      if (type === 'sent') {
        navigate(ROUTES.HOME);
        return;
      }

      if (goMatchTypes.includes('type')) {
        navigate(ROUTES.MATCH);
        return;
      }
    }

    navigate(-1);
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

  if (isFail) {
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
