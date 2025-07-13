import useAuth from '@hooks/use-auth'
import Loading from '@pages/loading/loading';
import Splash from '@pages/login/components/splash';
import { ROUTES } from '@routes/routes-config';
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';



interface ProtectedRouteProps {
    children: ReactNode
    showSplash: boolean;
}
const ProtectedRoute = ({children, showSplash}:ProtectedRouteProps) => {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return showSplash ? <Splash /> : <Loading />;
  }

  if(!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />

  return <>{children}</>
}

export default ProtectedRoute
