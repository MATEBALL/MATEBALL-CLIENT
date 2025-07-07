import Icon from '@components/icon/icon';

const BottomNavigation = () => {
  return (
    <div className="flex justify-between px-[1.6rem] py-[0.8rem]">
      <div className="h-[4.8rem] w-[4.8rem] flex-col-center gap-[0.4rem]">
        <Icon name="ic-home-lined" width={2.4} height={2.4} />
        <p className="cap_12_m text-gray-black">홈</p>
      </div>
      <div className="h-[4.8rem] w-[4.8rem] flex-col-center gap-[0.4rem]">
        <Icon name="ic-matchinglist" width={2.4} height={2.4} />
        <p className="cap_12_m text-gray-black">매칭 현황</p>
      </div>
      <div className="h-[4.8rem] w-[4.8rem] flex-col-center gap-[0.4rem]">
        <Icon name="ic-chat-lined" width={2.4} height={2.4} />
        <p className="cap_12_m text-gray-black">채팅</p>
      </div>
      <div className="h-[4.8rem] w-[4.8rem] flex-col-center gap-[0.4rem]">
        <Icon name="ic-my-lined" width={2.4} height={2.4} />
        <p className="cap_12_m text-gray-black">내 정보</p>
      </div>
    </div>
  );
};

export default BottomNavigation;
