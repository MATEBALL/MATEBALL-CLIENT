import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS } from '@constants/header';
import { ROUTES } from '@routes/routes-config';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const showBottomNav = [
    ROUTES.HOME,
    ROUTES.MATCH,
    ROUTES.CHAT,
    ROUTES.PROFILE,
    ROUTES.ERROR,
  ].includes(pathname);

  const showHeader = !NO_HEADER_PATHS.includes(pathname);

  return (
    <div className="flex h-screen flex-col">
      {showHeader && <Header />}
      <main className="flex-grow">
        <Suspense fallback={<div className="py-10 text-center">로딩 중...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {pathname === ROUTES.HOME && <Footer />}
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
