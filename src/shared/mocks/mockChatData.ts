export interface mockChatType {
  id: string;
  groupName: string;
  latestMessage: string;
  timestamp: string;
  unreadCount: number;
}

export const mockChatData: mockChatType[] = [
  {
    id: '1',
    groupName: '호두 외 3명',
    latestMessage: '티켓 예매는 제가 한 번에 할까요?',
    timestamp: '방금',
    unreadCount: 4,
  },
  {
    id: '2',
    groupName: '야구조아',
    latestMessage: '그럼 저희 경기 당일에 매표소 앞에서 뵐...',
    timestamp: '어제',
    unreadCount: 0,
  },
];
