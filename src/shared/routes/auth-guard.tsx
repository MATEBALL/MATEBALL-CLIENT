import useAuth from '@hooks/use-auth';
import { ROUTES } from '@routes/routes-config';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to={ROUTES.SPLASH} replace />;

  return <Outlet />;
};

export default AuthGuard;
