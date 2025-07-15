import { ROUTES } from '@routes/routes-config';

export const NAV_ITEMS = [
  {
    label: '홈',
    path: ROUTES.HOME,
    icon: {
      filled: 'home-filled',
      lined: 'home-lined',
    },
  },
  {
    label: '매칭 현황',
    path: ROUTES.MATCH,
    icon: {
      filled: 'matchinglist-filled',
      lined: 'matchinglist-lined',
    },
  },
  {
    label: '채팅',
    path: ROUTES.CHAT,
    icon: {
      filled: 'chat-filled',
      lined: 'chat-lined',
    },
  },
  {
    label: '내 정보',
    path: ROUTES.PROFILE,
    icon: {
      filled: 'my-filled',
      lined: 'my-lined',
    },
  },
];
