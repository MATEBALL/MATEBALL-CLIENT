import { getHeaderContent } from '@components/header/utils/get-header';
import { ROUTES } from '@routes/routes-config';
import clsx from 'clsx';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  headerTitle: string;
}

const Header = ({ headerTitle }: HeaderProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const isFail = urlParams.get('type') === 'fail';
  const isSignUp = pathname.includes(ROUTES.SIGNUP);
  const isHome = pathname === ROUTES.HOME;
  const isMatch = pathname === ROUTES.MATCH;
  const isChatRoom = pathname === ROUTES.CHAT_ROOM;
  const isEditProfile = pathname === ROUTES.PROFILE_EDIT;
  const isGame = Boolean(matchPath('/game/:date/:gameId', pathname));

  return (
    <header
      className={clsx('header-layout', {
        'bg-gray-black': isFail || isHome,
        'bg-gray-white': isSignUp || isChatRoom || isEditProfile || isGame,
        'bg-gray-100': isMatch,
      })}
    >
      {getHeaderContent(pathname, urlParams, isFail, navigate, headerTitle)}
    </header>
  );
};

export default Header;
