import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENADAR';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import { useTabState } from '@hooks/use-tab-state';
import CalendarSection from '@pages/home/components/calendar-section';
import MatchListSection from '@pages/home/components/match-list-section';
import TopSection from '@pages/home/components/top-section';
import { addDays } from 'date-fns';
import { useState } from 'react';

const Home = () => {
  const { activeType, changeTab, isOneOnOne, isGroup } = useTabState();
  const entryDate = new Date();
  const initialSelectedDate = getInitialSelectedDate(entryDate);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [baseWeekDate, _setBaseWeekDate] = useState(
    addDays(selectedDate, WEEK_CALENDAR_START_OFFSET),
  );

  return (
    <div className="pb-[5.6rem]">
      <TopSection />
      <CalendarSection
        activeType={activeType}
        onTabChange={changeTab}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        baseWeekDate={baseWeekDate}
      />
      <MatchListSection
        activeType={activeType}
        isOneOnOne={isOneOnOne}
        isGroup={isGroup}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default Home;
