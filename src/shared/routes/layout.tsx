import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS } from '@constants/header';
// import Loading from '@pages/loading/loading';
import { ROUTES } from '@routes/routes-config';
import clsx from 'clsx';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();
  const params = new URLSearchParams(location.search);

  const isResultFail = location.pathname === ROUTES.RESULT && params.get('type') === 'fail';

  const showBottomNav = [ROUTES.HOME, ROUTES.MATCH, ROUTES.CHAT, ROUTES.PROFILE].includes(pathname);
  const showHeader = !NO_HEADER_PATHS.includes(location.pathname);

  return (
    <div className={clsx('flex h-screen flex-col', { 'bg-gray-black': isResultFail })}>
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
