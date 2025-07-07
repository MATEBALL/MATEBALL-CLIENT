import Icon from '@components/icon/icon';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

export const getHeaderContent = (pathname: string, isFail: boolean) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
  };

  const handleBackClick = () => {
    navigate(-1);
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
    return (
      <Icon
        name="ic-arrow-left-24"
        width={2.4}
        height={2.4}
        fill="black"
        onClick={handleBackClick}
      />
    );
  }

  return (
    <Icon
      name="ic-arrow-left-24"
      width={2.4}
      height={2.4}
      className="cursor-pointer"
      onClick={handleBackClick}
    />
  );
};
