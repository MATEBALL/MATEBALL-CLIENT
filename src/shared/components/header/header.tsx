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
  const isResultFail = location.pathname === '/result' && urlParams.get('type') === 'fail';

  return (
    <header
      className={clsx('h-[5.6rem] py-[1.55rem] pl-[2rem]', {
        'bg-gray-white': isSignUp,
        'bg-gray-black': isResultFail || isHome,
      })}
    >
      {getHeaderContent(location.pathname, isFail, navigate)}
    </header>
  );
};

export default Header;
