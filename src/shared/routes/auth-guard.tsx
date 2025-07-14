import useAuth from '@hooks/use-auth';
import { ROUTES } from '@routes/routes-config';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const { isAuthenticated, isError } = useAuth();

  if (!isAuthenticated) return <Navigate to={ROUTES.SPLASH} replace />;
  if (isError) return <Navigate to={ROUTES.ERROR} replace />;

  return <Outlet />;
};

export default AuthGuard;
