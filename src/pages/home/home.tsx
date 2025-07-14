import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENDAR';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import { useTabState } from '@hooks/use-tab-state';
import { mockGameDatas } from '@mocks/mockGameData';
import CalendarBottomSheet from '@pages/home/components/calendar-bottom-sheet';
import CalendarSection from '@pages/home/components/calendar-section';
import MatchListSection from '@pages/home/components/match-list-section';
import TopSection from '@pages/home/components/top-section';
import { addDays, format } from 'date-fns';
import { useState } from 'react';

const Home = () => {
  const { activeType, changeTab, isOneOnOne, isGroup } = useTabState();
  const entryDate = new Date();
  const initialSelectedDate = getInitialSelectedDate(entryDate);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [baseWeekDate, setBaseWeekDate] = useState(
    addDays(selectedDate, WEEK_CALENDAR_START_OFFSET),
  );
  const [isCalendarBottomSheetOpen, setIsCalendarBottomSheetOpen] = useState(false);
  const [isGameInfoBottomSheetOpen, setIsGameInfoBottomSheetOpen] = useState(false);

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
        onOpenBottomSheet={() => setIsCalendarBottomSheetOpen(true)}
      />
      <MatchListSection
        activeType={activeType}
        isOneOnOne={isOneOnOne}
        isGroup={isGroup}
        selectedDate={selectedDate}
        onOpenGameInfoBottomSheet={() => setIsGameInfoBottomSheetOpen(true)}
      />
      <CalendarBottomSheet
        isOpen={isCalendarBottomSheetOpen}
        onClose={() => setIsCalendarBottomSheetOpen(false)}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        onWeekChange={handleDateSelect}
      />
      <GameMatchBottomSheet
        isOpen={isGameInfoBottomSheetOpen}
        onClose={() => setIsGameInfoBottomSheetOpen(false)}
        date={format(selectedDate, 'yyyy-MM-dd')}
        gameSchedule={mockGameDatas}
        activeType={activeType}
      />
    </div>
  );
};

export default Home;
