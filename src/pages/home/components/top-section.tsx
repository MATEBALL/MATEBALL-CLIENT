import CardBanner from '@components/card/banner-card/banner-card';

const TopSection = () => {
  return (
    <section className="bg-gray-black px-[1.6rem]">
      <h2 className="head_20_sb mb-[1.6rem] text-gray-white">당신을 위한 맞춤형 매칭</h2>
      <CardBanner subText="경기일 선택하고" text="나랑 딱 맞는 직관 메이트 찾자!" />
    </section>
  );
};

export default TopSection;
