import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes-config';

import Home from '@pages/home/home';
import Login from '@pages/login/login';
import SignUp from '@pages/sign-up/sign-up';
import Onboarding from '@pages/onboarding/onboarding';

import Match from '@pages/match/match';
import Create from '@pages/match/create/create';
import Single from '@pages/match/single/single';
import GroupMates from '@pages/match/groups/mates';
import GroupNew from '@pages/match/groups/new';

import Profile from '@pages/profile/profile';
import EditProfile from '@pages/profile/edit-profile/edit-profile';

import ChatList from '@pages/chat/chat-list';
import ChatRoom from '@pages/chat/chat-room/chat-room';

import Result from '@pages/result/result';

export const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.SIGNUP, element: <SignUp /> },
  { path: ROUTES.ONBOARDING, element: <Onboarding /> },
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
]);
