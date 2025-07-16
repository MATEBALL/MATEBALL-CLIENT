import { gameQueries } from '@apis/game/game-queries';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import Button from '@components/button/button/button';
import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENDAR';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import Dialog from '@components/dialog/dialog';
import useAuth from '@hooks/use-auth';
import { useTabState } from '@hooks/use-tab-state';
import CalendarBottomSheet from '@pages/home/components/calendar-bottom-sheet';
import CalendarSection from '@pages/home/components/calendar-section';
import MatchListSection from '@pages/home/components/match-list-section';
import TopSection from '@pages/home/components/top-section';
import { MATCHING_MODAL_DESCRIPTION } from '@pages/home/constants/matching-condition';
import { ROUTES } from '@routes/routes-config';
import { useQuery } from '@tanstack/react-query';
import { addDays, format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { activeType, changeTab, isSingle, isGroup } = useTabState();
  const navigate = useNavigate();
  const entryDate = new Date();
  const initialSelectedDate = getInitialSelectedDate(entryDate);

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [baseWeekDate, setBaseWeekDate] = useState(
    addDays(initialSelectedDate, WEEK_CALENDAR_START_OFFSET),
  );
  const [isCalendarBottomSheetOpen, setIsCalendarBottomSheetOpen] = useState(false);
  const [isGameInfoBottomSheetOpen, setIsGameInfoBottomSheetOpen] = useState(false);

  const dateStr = format(selectedDate, 'yyyy-MM-dd');
  const { data } = useQuery({
    ...gameQueries.GAME_LIST(dateStr),
    enabled: isCalendarBottomSheetOpen || isGameInfoBottomSheetOpen,
  });

  const { needsMatchingSetup } = useAuth();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setBaseWeekDate(date);
  };

  const handleComplete = () => {
    navigate(ROUTES.ONBOARDING);
  };

  return (
    <div className=" bg-gray-200 pb-[5.6rem]">
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
          <Dialog info={MATCHING_MODAL_DESCRIPTION}>
            <Button label="최초 매칭 조건 설정" onClick={handleComplete} />
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default Home;
