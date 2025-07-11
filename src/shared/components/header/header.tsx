import { getHeaderContent } from '@components/header/utils/get-header';
import clsx from 'clsx';
import { ROUTES } from '@routes/routes-config';
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
      className={clsx('h-[5.6rem] py-[1.55rem] pl-[2rem]', {
        'bg-gray-white': isSignUp,
        'bg-gray-black': isFail || isHome,
      })}
    >
      {getHeaderContent(location.pathname, urlParams, isFail, navigate)}
    </header>
  );
};

export default Header;
