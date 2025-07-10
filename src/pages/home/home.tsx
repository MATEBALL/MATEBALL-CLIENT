import { useTabState } from '@hooks/use-tab-state';
import CalendarSection from '@pages/home/components/calendar-section';
import MatchListSection from '@pages/home/components/match-list-section';
import TopSection from '@pages/home/components/top-section';

const Home = () => {
  const { activeType, changeTab, isOneOnOne, isGroup } = useTabState();

  return (
    <div className="pb-[5.6rem]">
      <TopSection />
      <CalendarSection activeType={activeType} onTabChange={changeTab} />
      <MatchListSection activeType={activeType} isOneOnOne={isOneOnOne} isGroup={isGroup} />
    </div>
  );
};

export default Home;
