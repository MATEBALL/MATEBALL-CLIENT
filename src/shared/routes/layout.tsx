import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS } from '@constants/header';
import Loading from '@pages/loading/loading';
import { ROUTES } from '@routes/routes-config';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const showBottomNav = [ROUTES.HOME, ROUTES.MATCH, ROUTES.CHAT, ROUTES.PROFILE].includes(pathname);

  const showHeader = !NO_HEADER_PATHS.includes(pathname);

  return (
    <div className="h-screen flex-col">
      <Suspense fallback={<Loading />}>
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
