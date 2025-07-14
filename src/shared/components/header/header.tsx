import { getHeaderContent } from '@components/header/utils/get-header';
import { ROUTES } from '@routes/routes-config';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const isFail = urlParams.has('fail');

  const isSignUp = location.pathname.includes(ROUTES.SIGNUP);
  const isHome = location.pathname === ROUTES.HOME;
  const isMatch = location.pathname === ROUTES.MATCH;

  return (
    <header
      className={clsx('header-layout', {
        'bg-gray-black': isHome,
        'bg-gray-white': isSignUp,
        'bg-gray-100': isMatch,
      })}
    >
      {getHeaderContent(location.pathname, isFail, navigate)}
    </header>
  );
};

export default Header;
