import CardBanner from '@components/card/banner-card/banner-card';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TopSection = () => {
  const navigate = useNavigate();

  // 가이드 페이지 미리 로드
  useEffect(() => {
    import('@pages/guide/guide');
  }, []);

  const handleBannerClick = () => {
    navigate('/guide');
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
