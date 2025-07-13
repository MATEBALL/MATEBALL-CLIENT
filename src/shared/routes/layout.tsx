import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS } from '@constants/header';
import { cn } from '@libs/cn';
// import Loading from '@pages/loading/loading';
import { ROUTES } from '@routes/routes-config';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);

  const isResultFail = pathname === ROUTES.RESULT && params.get('type') === 'fail';

  const showBottomNav = [ROUTES.HOME, ROUTES.MATCH, ROUTES.CHAT, ROUTES.PROFILE].includes(pathname);
  const showHeader = !NO_HEADER_PATHS.includes(pathname);

  return (
    <div className={cn('flex h-screen flex-col', isResultFail && 'bg-gray-black')}>
      {showHeader && <Header />}
      <main className="flex-grow">
        <Suspense fallback={<div />}>
          <Outlet />
        </Suspense>
      </main>
      {pathname === ROUTES.HOME && <Footer />}
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
