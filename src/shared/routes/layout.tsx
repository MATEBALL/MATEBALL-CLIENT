import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS, SHOW_BOTTOM_NAVIGATE_PATHS } from '@constants/header';
import { cn } from '@libs/cn';
import { ROUTES } from '@routes/routes-config';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);

  const isFail = pathname === ROUTES.RESULT && params.get('type') === 'fail';

  const showBottomNav = SHOW_BOTTOM_NAVIGATE_PATHS.includes(pathname);
  const showHeader = !NO_HEADER_PATHS.some((path) => matchPath({ path, end: true }, pathname));

  return (
    <div className={cn('h-full flex-col', isFail && 'bg-gray-black')}>
      {showHeader && <Header />}
      <div className="scrollbar-hide flex-grow overflow-y-auto">
        <main>
          <Outlet />
        </main>
        {pathname === ROUTES.HOME && <Footer />}
      </div>
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
