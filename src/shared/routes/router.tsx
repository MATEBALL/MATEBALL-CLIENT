import ErrorView from '@pages/error/error-view';
import { LoginCallback } from '@pages/login/components/login-callback';
import Layout from '@routes/layout';
import {
  ChatList,
  ChatRoom,
  Create,
  EditProfile,
  GroupMates,
  GroupNew,
  Home,
  Login,
  Match,
  Onboarding,
  OnboardingGroup,
  Profile,
  Result,
  SignUp,
  Single,
} from '@routes/lazy';
import { ROUTES } from '@routes/routes-config';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  // { path: '/', element: <Splash /> },
  {
    path: ROUTES.LAYOUT,
    element: <Layout />,
    children: [
      { path: ROUTES.AUTH, element: <LoginCallback /> },
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.LOGIN, element: <Login /> },
      { path: ROUTES.SIGNUP, element: <SignUp /> },
      { path: ROUTES.ONBOARDING, element: <Onboarding /> },
      { path: ROUTES.ONBOARDING_GROUP, element: <OnboardingGroup /> },
      { path: ROUTES.MATCH_CREATE, element: <Create /> },
      { path: ROUTES.MATCH_SINGLE(), element: <Single /> },
      { path: ROUTES.GROUP_MATES(), element: <GroupMates /> },
      { path: ROUTES.GROUP_NEW(), element: <GroupNew /> },
      { path: ROUTES.MATCH, element: <Match /> },
      { path: ROUTES.PROFILE, element: <Profile /> },
      { path: ROUTES.PROFILE_EDIT, element: <EditProfile /> },
      { path: ROUTES.CHAT, element: <ChatList /> },
      { path: ROUTES.CHAT_ROOM(), element: <ChatRoom /> },
      { path: ROUTES.RESULT, element: <Result /> },
      {
        path: '*',
        element: <Navigate to={ROUTES.ERROR} replace />,
      },
      {
        path: '/error',
        element: <ErrorView />,
      },
    ],
  },
]);
