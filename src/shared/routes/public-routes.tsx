import { LoginCallback } from '@pages/login/components/login-callback';
import LoginWithSplash from '@pages/login/login-with-splash';
import { SignUp } from '@routes/lazy';
import { ROUTES } from '@routes/routes-config';

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: <LoginWithSplash /> },
  { path: ROUTES.SIGNUP, element: <SignUp /> },
  { path: ROUTES.AUTH, element: <LoginCallback /> },
];
