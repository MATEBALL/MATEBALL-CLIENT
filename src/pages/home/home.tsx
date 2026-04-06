import { gameQueries } from '@apis/game/game-queries';
import { matchQueries } from '@apis/match/match-queries';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import MatchingCtaBottomSheet from '@components/bottom-sheet/matching-cta/matching-cta-bottom-sheet';
import Button from '@components/button/button/button';
import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENDAR';
import Dialog from '@components/dialog/dialog';
import type { TabType } from '@components/tab/tab/constants/tab-type';
import useAuth from '@hooks/use-auth';
import { useTabState } from '@hooks/use-tab-state';
import { gaEvent } from '@libs/analytics';
import queryClient from '@libs/query-client';
import type { GameCardItem } from '@pages/game/components/game-card';
import CalendarBottomSheet from '@pages/home/components/calendar-bottom-sheet';
import CalendarSection from '@pages/home/components/calendar-section';
import GameListSection from '@pages/home/components/game-list-section';
import TopSection from '@pages/home/components/top-section';
import { MATCHING_MODAL_DESCRIPTION } from '@pages/home/constants/matching-condition';
import { ROUTES } from '@routes/routes-config';
import { useQuery } from '@tanstack/react-query';
import { addDays, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleScrollLock } from '@/shared/utils/scroll-lock';

// const getSelectedDateFromQuery = (searchParams: URLSearchParams, fallbackDate: Date): Date => {
//   const queryDate = searchParams.get('date');
//   if (!queryDate) return fallbackDate;
//   const parsedDate = parse(queryDate, 'yyyy-MM-dd', new Date());
//   return isValid(parsedDate) ? parsedDate : fallbackDate;
// };

const Home = () => {
  const { activeType, changeTab } = useTabState();
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  const entryDate = new Date();
  const initialSelectedDate = entryDate;
  // const fallbackSelectedDate = entryDate;
  // const initialQuerySelectedDate = getSelectedDateFromQuery(searchParams, fallbackSelectedDate);

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  // const [selectedDate, setSelectedDate] = useState(initialQuerySelectedDate);
  // const [baseWeekDate, setBaseWeekDate] = useState(
  //   addDays(initialQuerySelectedDate, WEEK_CALENDAR_START_OFFSET),
  // );
  const [baseWeekDate, setBaseWeekDate] = useState(
    addDays(initialSelectedDate, WEEK_CALENDAR_START_OFFSET),
  );
  const [isCalendarBottomSheetOpen, setIsCalendarBottomSheetOpen] = useState(false);
  const [isMatchingCtaBottomSheetOpen, setIsMatchingCtaBottomSheetOpen] = useState(false);
  const [isGameInfoBottomSheetOpen, setIsGameInfoBottomSheetOpen] = useState(false);
  const [selectedCreateType, setSelectedCreateType] = useState<TabType>(activeType);
  const [selectedGame, setSelectedGame] = useState<GameCardItem | null>(null);

  const dateStr = format(selectedDate, 'yyyy-MM-dd');
  const { data } = useQuery({
    ...gameQueries.GAME_LIST(dateStr),
    enabled: isCalendarBottomSheetOpen || isMatchingCtaBottomSheetOpen || isGameInfoBottomSheetOpen,
  });

  const { needsMatchingSetup } = useAuth();

  useEffect(() => {
    if (!needsMatchingSetup) return;
    handleScrollLock(true);
    return () => handleScrollLock(false);
  }, [needsMatchingSetup]);

  useEffect(() => {
    const from = needsMatchingSetup ? 'onboarding' : 'return_user';
    gaEvent('home_enter', { from });
  }, [needsMatchingSetup]);

  // const syncSelectedDateToQuery = (date: Date) => {
  //   const nextParams = new URLSearchParams(searchParams);
  //   nextParams.set('date', format(date, 'yyyy-MM-dd'));
  //   setSearchParams(nextParams, { replace: true });
  // };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setBaseWeekDate(date);
  };

  // const handleDateChange = (date: Date) => {
  //   setSelectedDate(date);
  //   setBaseWeekDate(date);
  //   syncSelectedDateToQuery(date);
  // };

  // useEffect(() => {
  //   const queryDate = getSelectedDateFromQuery(searchParams, fallbackSelectedDate);
  //   const queryDateStr = format(queryDate, 'yyyy-MM-dd');
  //   const selectedDateStr = format(selectedDate, 'yyyy-MM-dd');

  //   if (queryDateStr !== selectedDateStr) {
  //     setSelectedDate(queryDate);
  //     setBaseWeekDate(queryDate);
  //   }
  // }, [fallbackSelectedDate, searchParams, selectedDate]);

  const handleWeekChange = (direction: 'prev' | 'next') => {
    setBaseWeekDate((prev) => addDays(prev, direction === 'next' ? 7 : -7));
  };

  const handleComplete = () => {
    gaEvent('condition_set_start');
    navigate(ROUTES.ONBOARDING);
  };

  const handleGameClick = async (game: GameCardItem) => {
    setSelectedGame(game);

    const gameMatchData = await queryClient.fetchQuery(matchQueries.GAME_MATCH_LIST(game.id));

    const hasMatchCard = (gameMatchData.result ?? []).length > 0;

    if (!hasMatchCard) {
      setSelectedCreateType(activeType);
      setIsMatchingCtaBottomSheetOpen(true);
      return;
    }

    navigate(ROUTES.GAME(dateStr, String(game.id)));
  };

  const handleCloseMatchingCtaBottomSheet = () => {
    setIsMatchingCtaBottomSheetOpen(false);
    setSelectedGame(null);
  };

  const handleMatchingCtaSubmit = (type: TabType) => {
    setSelectedCreateType(type);
    setIsMatchingCtaBottomSheetOpen(false);
    setIsGameInfoBottomSheetOpen(true);
  };

  return (
    <div className="h-full bg-gray-black pt-[0.8rem] pb-[5.6rem]">
      <TopSection />
      <CalendarSection
        activeType={activeType}
        onTabChange={changeTab}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        baseWeekDate={baseWeekDate}
        onOpenBottomSheet={() => setIsCalendarBottomSheetOpen(true)}
        onWeekChange={handleWeekChange}
        entryDate={entryDate}
      />
      <MatchingCtaBottomSheet
        isOpen={isMatchingCtaBottomSheetOpen}
        onClose={() => setIsMatchingCtaBottomSheetOpen(false)}
        date={format(selectedDate, 'yyyy-MM-dd')}
        gameSchedule={selectedGame ? [selectedGame] : []}
        initialType={activeType}
        onSubmit={handleMatchingCtaSubmit}
      />
      <GameListSection selectedDate={selectedDate} onGameClick={handleGameClick} />
      <CalendarBottomSheet
        isOpen={isCalendarBottomSheetOpen}
        onClose={() => setIsCalendarBottomSheetOpen(false)}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
      <GameMatchBottomSheet
        isOpen={isGameInfoBottomSheetOpen}
        onClose={handleCloseMatchingCtaBottomSheet}
        date={format(selectedDate, 'yyyy-MM-dd')}
        gameSchedule={data ?? []}
        activeType={selectedCreateType}
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
