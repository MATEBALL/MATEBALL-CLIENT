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

  return (
    <header
      className={clsx('sticky top-0 z-20 h-[5.6rem] py-[1.55rem] pl-[2rem]', {
        'bg-black': isHome,
        'bg-gray-white': isSignUp,
      })}
    >
      {getHeaderContent(location.pathname, isFail, navigate)}
    </header>
  );
};

export default Header;
