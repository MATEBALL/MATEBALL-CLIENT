import CardBanner from '@components/card/banner-card/banner-card';

const HomeTopContent = () => {
  return (
    <div className="bg-black">
      <div className="px-[1.6rem]">
        <h1 className="head_20_sb mb-[1.6rem] self-start bg-black text-white">
          당신을 위한 맞춤형 매칭
        </h1>
        <CardBanner subText="경기일 선택하고" text="나랑 딱 맞는 직관 메이트 찾자!" />
      </div>
    </div>
  );
};

export default HomeTopContent;
