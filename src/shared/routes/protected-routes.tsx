import {
  ChatList,
  Create,
  EditProfile,
  GroupMates,
  GroupNew,
  Home,
  Match,
  Onboarding,
  OnboardingGroup,
  Profile,
  Result,
  Single,
} from '@routes/lazy';
import { ROUTES } from '@routes/routes-config';

export const protectedRoutes = [
  { path: ROUTES.MATCH_CREATE(), element: <Create /> },
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.MATCH_SINGLE(), element: <Single /> },
  { path: ROUTES.GROUP_MATES(), element: <GroupMates /> },
  { path: ROUTES.GROUP_NEW(), element: <GroupNew /> },
  { path: ROUTES.MATCH, element: <Match /> },
  { path: ROUTES.PROFILE, element: <Profile /> },
  { path: ROUTES.PROFILE_EDIT, element: <EditProfile /> },
  { path: ROUTES.CHAT, element: <ChatList /> },
  { path: ROUTES.RESULT(), element: <Result /> },
  { path: ROUTES.ONBOARDING, element: <Onboarding /> },
  { path: ROUTES.ONBOARDING_GROUP, element: <OnboardingGroup /> },
];
