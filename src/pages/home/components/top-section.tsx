const TopSection = () => {
  // TODO: 유저 수 api 연결
  const MOCK_USERS = 124;

  return (
    <section className="mx-[1.6rem] rounded-[12px] bg-gray-900 px-[1.6rem] py-[1rem]">
      <p className="cap_14_m text-gray-white">
        현재 <span className="text-sub-800">{MOCK_USERS}명</span>이 메이트를 찾고 있어요!🔥
      </p>
    </section>
  );
};

export default TopSection;
