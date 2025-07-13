import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS, SHOW_BOTTOM_NAVIGATE_PATHS } from '@constants/header';
// import Loading from '@pages/loading/loading';
import { ROUTES } from '@routes/routes-config';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const showBottomNav = SHOW_BOTTOM_NAVIGATE_PATHS.includes(pathname);
  const showHeader = !NO_HEADER_PATHS.includes(pathname);

  return (
    <div className="h-screen flex-col">
      <Suspense fallback={<div />}>
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
