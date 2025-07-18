import Icon from '@components/icon/icon';

const ChatRoom = () => {
  return (
    <div className="h-full flex-col-between">
      <div className="w-full">
        <section className="mb-[2rem] flex gap-[0.8rem] bg-main-200 px-[0.6rem] py-[0.8rem] text-main-800">
          <Icon name="calendar" size={2} />
          <p className="cap_14_m">07월 20일 종합운동장</p>
        </section>

        <section className="flex-col-center gap-[1.2rem]">
          <div className="cap_12_m w-[16.6rem] rounded-[40px] bg-gray-white px-[0.4rem] py-[0.6rem] text-center text-gray-800">
            사용자 님이 입장하셨습니다.
          </div>
          <div className="cap_12_m w-[15.4rem] rounded-[40px] bg-gray-white px-[0.4rem] py-[0.6rem] text-center text-gray-800">
            2025년 7월 20일 일요일
          </div>
        </section>

        <div className="mt-[1.2rem] mb-[1.6rem] flex justify-end px-[1.6rem]">
          <Icon name="chat-1" width={24.2} height={11} />
        </div>

        <div className="mt-[0.8rem] flex justify-start px-[1.6rem]">
          <Icon name="chat-2" width={34.3} height={8.8} />
        </div>
      </div>

      <Icon name="chat-3" width={40} height={8.8} />
    </div>
  );
};

export default ChatRoom;
