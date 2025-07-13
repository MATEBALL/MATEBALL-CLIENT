import { LoginCallback } from '@pages/login/components/login-callback';
import { Login, SignUp } from '@routes/lazy';
import { ROUTES } from '@routes/routes-config';

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.SIGNUP, element: <SignUp /> },
  { path: ROUTES.AUTH, element: <LoginCallback /> },
];
