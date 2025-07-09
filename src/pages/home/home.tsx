import HomeCalendarTap from '@pages/home/components/home-calendar-tap';
import HomeCardList from '@pages/home/components/home-card-list';
import HomeTopContent from '@pages/home/components/home-top-content';

const Home = () => {
  return (
    <div className="pb-[5.6rem]">
      <HomeTopContent />
      <HomeCalendarTap />
      <HomeCardList />
    </div>
  );
};

export default Home;
