export const mockChatData = [
  {
    id: '1',
    type: 'group',
    participants: 3,
    title: '호두',
    latestMessage: '티켓 예매는 제가 한 번에 할까요?',
    timestamp: '방금',
    unreadCount: 4,
  },
  {
    id: '2',
    type: 'single',
    title: '야구조아',
    participants: 1,
    latestMessage: '그럼 저희 경기 당일에 매표소 앞에서 뵐...',
    timestamp: '어제',
    unreadCount: 0,
  },
] as const;