import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS, SHOW_BOTTOM_NAVIGATE_PATHS } from '@constants/header';
import { ROUTES } from '@routes/routes-config';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { cn } from '@libs/cn';

const Layout = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);

  const isFail = pathname === ROUTES.RESULT && params.get('type') === 'fail';

  const showBottomNav = SHOW_BOTTOM_NAVIGATE_PATHS.includes(pathname);
  const showHeader = !NO_HEADER_PATHS.includes(pathname);

  return (
    <div className={cn('h-screen flex-col', isFail && 'bg-gray-black')}>
      <Suspense>
        {showHeader && <Header />}
        <main className="flex-grow">
          <Outlet />
        </main>
        {pathname === ROUTES.HOME && <Footer />}
        {showBottomNav && <BottomNavigation />}
      </Suspense>
    </div>
  );
};

export default Layout;
