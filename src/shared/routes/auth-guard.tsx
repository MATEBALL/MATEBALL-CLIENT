import useAuth from '@hooks/use-auth';
import { ROUTES } from '@routes/routes-config';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const { isAuthenticated, isAuthLoading } = useAuth();

  console.log(isAuthenticated);

  if (isAuthLoading) return <div />;
  if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />;

  return <Outlet />;
};

export default AuthGuard;
