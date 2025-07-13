import { lazy } from 'react';

// Auth
export const Login = lazy(() => import('@pages/login/login'));
export const SignUp = lazy(() => import('@pages/sign-up/sign-up'));

// Home
export const Home = lazy(() => import('@pages/home/home'));

// Matching
export const Onboarding = lazy(() => import('@pages/onboarding/onboarding'));
export const Create = lazy(() => import('@pages/match/create/create'));
export const Single = lazy(() => import('@pages/match/single/single'));
export const GroupMates = lazy(() => import('@pages/match/groups/mates'));
export const GroupNew = lazy(() => import('@pages/match/groups/new'));
export const Match = lazy(() => import('@pages/match/match'));
export const Result = lazy(() => import('@pages/result/result'));

// Mypage
export const Profile = lazy(() => import('@pages/profile/profile'));
export const EditProfile = lazy(() => import('@pages/profile/edit-profile/edit-profile'));

// Chat
export const ChatList = lazy(() => import('@pages/chat/chat-list'));
export const ChatRoom = lazy(() => import('@pages/chat/components/chat-room/chat-room'));
