import { ROUTES } from '@routes/routes-config';

export const NAV_ITEMS = [
  {
    label: '홈',
    path: ROUTES.HOME,
    icon: {
      filled: 'ic-home-filled',
      lined: 'ic-home-lined',
    },
  },
  {
    label: '매칭 현황',
    path: ROUTES.MATCH,
    icon: {
      filled: 'ic-matchinglist-filled',
      lined: 'ic-matchinglist-lined',
    },
  },
  {
    label: '채팅',
    path: ROUTES.CHAT,
    icon: {
      filled: 'ic-chat-filled',
      lined: 'ic-chat-lined',
    },
  },
  {
    label: '내 정보',
    path: ROUTES.PROFILE,
    icon: {
      filled: 'ic-my-filled',
      lined: 'ic-my-lined',
    },
  },
];
