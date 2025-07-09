import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENDAR';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import { useTabState } from '@hooks/use-tab-state';
import CalendarBottomSheet from '@pages/home/components/calendar-bottom-sheet';
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
  const [baseWeekDate, setBaseWeekDate] = useState(
    addDays(selectedDate, WEEK_CALENDAR_START_OFFSET),
  );
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setBaseWeekDate(date);
  };

  return (
    <div className="pb-[5.6rem]">
      <TopSection />
      <CalendarSection
        activeType={activeType}
        onTabChange={changeTab}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        baseWeekDate={baseWeekDate}
        onOpenBottomSheet={() => setIsBottomSheetOpen(true)}
      />
      <MatchListSection
        activeType={activeType}
        isOneOnOne={isOneOnOne}
        isGroup={isGroup}
        selectedDate={selectedDate}
      />
      <CalendarBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        onWeekChange={handleDateSelect}
      />
    </div>
  );
};

export default Home;