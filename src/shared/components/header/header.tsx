import { getHeaderContent } from '@components/header/utils/get-header';
import { ROUTES } from '@routes/routes-config';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const isFail = urlParams.get('type') === 'fail';
  const isSignUp = pathname.includes(ROUTES.SIGNUP);
  const isHome = pathname === ROUTES.HOME;
  const isMatch = location.pathname === ROUTES.MATCH;

  return (
    <header
      className={clsx('header-layout', {
        'bg-gray-black': isFail || isHome,
        'bg-gray-white': isSignUp,
        'bg-gray-100': isMatch,
      })}
    >
      {getHeaderContent(pathname, urlParams, isFail, navigate)}
    </header>
  );
};

export default Header;
