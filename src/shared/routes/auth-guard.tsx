import useAuth from '@hooks/use-auth';
import Loading from '@pages/loading/loading';
import { ROUTES } from '@routes/routes-config';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  if (!isAuthenticated) return <Navigate to={ROUTES.SPLASH} replace />;

  return <Outlet />;
};

export default AuthGuard;
