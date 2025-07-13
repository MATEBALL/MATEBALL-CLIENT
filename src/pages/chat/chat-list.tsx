import { mockChatData } from '@mocks/mockChatData';
import ChatCard from '@pages/chat/components/chat-card/chat-card';

const ChatList = () => {
  return (
    <div className="flex-col gap-[1.2rem] p-[1.6rem]">
      {mockChatData.map((chat) => (
        <ChatCard key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
