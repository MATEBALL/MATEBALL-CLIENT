import CardBanner from '@components/card/banner-card/banner-card';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

const TopSection = () => {
  const navigate = useNavigate();

  const handleBannerClick = () => {
    navigate(ROUTES.GUIDE);
  };

  return (
    <section className="bg-gray-black px-[1.6rem] pt-[0.1rem]">
      <CardBanner
        subText="나와 딱 맞는 직관 메이트를 찾고 싶다면?"
        text="이용가이드 보러 가기"
        onClick={handleBannerClick}
      />
    </section>
  );
};

export default TopSection;
