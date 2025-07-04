import Footer from '@components/footer/footer';
import { ROUTES } from '@routes/routes-config';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      {location.pathname === ROUTES.HOME && <Footer />}
    </div>
  );
};

export default Layout;
