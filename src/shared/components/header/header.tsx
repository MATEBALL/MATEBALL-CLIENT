import { getHeaderContent } from '@components/header/utils/get-header';
import { ROUTES } from '@routes/routes-config';
import clsx from 'clsx';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  headerTitle: string;
}

const Header = ({ headerTitle }: HeaderProps) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const urlParams = new URLSearchParams(search);

  const resultType = urlParams.get('type');

  const isFail = urlParams.get('type') === 'fail';
  const isSignUp = pathname.includes(ROUTES.SIGNUP);
  const isHome = pathname === ROUTES.HOME;
  const isMatch = pathname === ROUTES.MATCH;
  const isMatchSingle = Boolean(matchPath(ROUTES.MATCH_SINGLE(), pathname));
  const isMatchGroup = Boolean(matchPath(ROUTES.GROUP_MATES(), pathname));
  const isChatRoom = pathname === ROUTES.CHAT_ROOM;
  const isEditProfile = pathname === ROUTES.PROFILE_EDIT;
  const isGame = Boolean(matchPath('/game/:date/:gameId', pathname));
  const isMemberDetail = Boolean(matchPath(ROUTES.MATCH_MEMBER_DETAIL(), pathname));
  const isProfile = pathname === ROUTES.PROFILE;
  const isResult = Boolean(matchPath(ROUTES.RESULT(), pathname));
  const isMatchingReceive = isResult && resultType === 'received';

  return (
    <header
      className={clsx('header-layout', {
        'bg-gray-black': isFail || isHome || isMatch || isProfile,
        'bg-gray-white':
          isSignUp ||
          isChatRoom ||
          isEditProfile ||
          isGame ||
          isMatchSingle ||
          isMatchGroup ||
          isMemberDetail ||
          isMatchingReceive,
      })}
    >
      {getHeaderContent(pathname, urlParams, isFail, navigate, headerTitle)}
    </header>
  );
};

export default Header;
