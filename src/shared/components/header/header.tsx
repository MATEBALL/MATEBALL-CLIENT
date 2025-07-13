import { getHeaderContent } from '@components/header/utils/get-header';
import { ROUTES } from '@routes/routes-config';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const isFail = urlParams.get('type') === 'fail';
  const isSignUp = location.pathname.includes(ROUTES.SIGNUP);
  const isHome = location.pathname === ROUTES.HOME;

  return (
    <header
      className={clsx('header-layout', {
        'bg-gray-black': isFail || isHome,
        'bg-gray-white': isSignUp,
      })}
    >
      {getHeaderContent(location.pathname, urlParams, isFail, navigate)}
    </header>
  );
};

export default Header;