import useAuth from '@hooks/use-auth';
import { ROUTES } from '@routes/routes-config';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const { isAuthenticated, needsSignup, isError } = useAuth();

  if (needsSignup) return <Navigate to={ROUTES.SIGNUP} replace />;
  if (!isAuthenticated) return <Navigate to={ROUTES.SPLASH} replace />;
  if (isError) return <Navigate to={ROUTES.ERROR} replace />;

  return <Outlet />;
};

export default AuthGuard;
