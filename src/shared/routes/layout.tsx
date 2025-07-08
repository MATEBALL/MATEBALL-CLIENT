import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import { ROUTES } from '@routes/routes-config';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const showBottomNav = [ROUTES.HOME, ROUTES.MATCH, ROUTES.CHAT, ROUTES.PROFILE].includes(pathname);

  return (
    <div className="min-h-screen flex-col">
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
