import Footer from '@components/footer/footer';
import { ROUTES } from '@routes/routes-config';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex-col">
      <main className="flex-grow">
        <Suspense fallback={<div className="py-10 text-center">로딩 중...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {location.pathname === ROUTES.HOME && <Footer />}
    </div>
  );
};

export default Layout;
