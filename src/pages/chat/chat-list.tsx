import { mockChatData } from '@mocks/mockChatData';
import ChatCard from '@pages/chat/components/chat-card';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

const ChatList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.CHAT_ROOM);
  };

  return (
    <div className="flex-col gap-[1.2rem] p-[1.6rem]">
      {mockChatData.map((chat) => (
        <ChatCard key={chat.id} chat={chat} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ChatList;
