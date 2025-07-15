import { gameQueries } from '@apis/game/game-queries';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENDAR';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import Dialog from '@components/dialog/dialog';
import useAuth from '@hooks/use-auth';
import { useTabState } from '@hooks/use-tab-state';
import CalendarBottomSheet from '@pages/home/components/calendar-bottom-sheet';
import CalendarSection from '@pages/home/components/calendar-section';
import MatchListSection from '@pages/home/components/match-list-section';
import TopSection from '@pages/home/components/top-section';
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';
=======
import { MATCHING_MODAL_DESCRIPTION } from '@pages/home/constants/matching-condition';
>>>>>>> 03372e9 (feat: 최초 매칭 모달 연결 (#176))
import { addDays, format } from 'date-fns';
import { useState } from 'react';

const Home = () => {
  const { activeType, changeTab, isSingle, isGroup } = useTabState();
  const entryDate = new Date();
  const initialSelectedDate = getInitialSelectedDate(entryDate);

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [baseWeekDate, setBaseWeekDate] = useState(
    addDays(initialSelectedDate, WEEK_CALENDAR_START_OFFSET),
  );
  const [isCalendarBottomSheetOpen, setIsCalendarBottomSheetOpen] = useState(false);
  const [isGameInfoBottomSheetOpen, setIsGameInfoBottomSheetOpen] = useState(false);

  const dateStr = format(selectedDate, 'yyyy-MM-dd');
  const { data } = useQuery(gameQueries.GAME_LIST(dateStr));
  const { needsMatchingSetup } = useAuth();

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
        isSingle={isSingle}
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
        gameSchedule={data ?? []}
        activeType={activeType}
      />
      {needsMatchingSetup && (
        <div className="matching-modal-backdrop z-[var(--z-modal)] flex-col-center ">
          <Dialog info={MATCHING_MODAL_DESCRIPTION} />
        </div>
      )}
    </div>
  );
};

export default Home;
