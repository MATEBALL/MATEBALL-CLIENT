import ProfileImages from '@pages/chat/utils/get-profile-images';

interface ChatCardProps {
  chat: {
    id: string;
    type: string;
    groupName: string;
    latestMessage: string;
    timestamp: string;
    unreadCount: number;
    participants?: number;
  };
}

const ChatCard = ({ chat }: ChatCardProps) => {
  return (
    <section className="flex cursor-pointer gap-[1.2rem] rounded-[12px] bg-gray-white p-[1.6rem]">
      {ProfileImages(chat.type)}
      <div className="w-full flex-col gap-[0.4rem]">
        <div className="w-full flex-row-between">
          <div className="flex gap-[0.4rem]">
            <h2 className="body_16_b">{chat.groupName}</h2>
            {chat.type === 'group' && (
              <p className="body_16_m text-gray-600">외 {chat.participants}명</p>
            )}
          </div>
          <p className="cap_12_m text-gray-600">{chat.timestamp}</p>
        </div>
        <div className="w-full flex-row-between ">
          <p className="cap_12_m text-gray-600">{chat.latestMessage}</p>
          {chat.unreadCount > 1 && (
            <div className="cap_12_m rounded-[8px] bg-main-900 px-[0.8rem] py-[0.2rem] text-center text-gray-white">
              {chat.unreadCount}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatCard;
