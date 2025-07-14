import ErrorView from '@pages/error/error-view';
import Splash from '@pages/login/components/splash';
import AuthGuard from '@routes/auth-guard';
import Layout from '@routes/layout';
import { protectedRoutes } from '@routes/protected-routes';
import { publicRoutes } from '@routes/public-routes';
import { ROUTES } from '@routes/routes-config';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: ROUTES.SPLASH,
    element: <Splash />,
  },
  {
    path: ROUTES.LAYOUT,
    element: <Layout />,
    children: [
      ...publicRoutes,
      {
        element: <AuthGuard />,
        children: [...protectedRoutes],
      },
      {
        path: '/error',
        element: <ErrorView />,
      },
      {
        path: '*',
        element: <ErrorView message={`존재하지 않는 페이지입니다.\nURL을 다시 확인해 주세요.`} />,
      },
    ],
  },
]);
