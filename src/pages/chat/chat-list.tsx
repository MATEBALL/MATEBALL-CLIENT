import Icon from '@components/icon/icon';

const ChatList = () => {
  return (
    <div className="h-full flex-col-center gap-[0.8rem] bg-gray-white">
      <Icon name="graphic_chat_empty" width={16} height={16} />
      <p className="cap_14_sb text-center text-gray-800">
        채팅 기능은 아직 준비 중이에요!
        <br />
        완료된 매칭은 '매칭 현황'에서 확인하고 소통할 수 있어요.
      </p>
    </div>
  );
};

export default ChatList;
