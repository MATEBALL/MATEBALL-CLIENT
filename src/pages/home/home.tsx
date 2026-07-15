import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import MatchingCtaBottomSheet from '@components/bottom-sheet/matching-cta/matching-cta-bottom-sheet';
import Button from '@components/button/button/button';
import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENDAR';
import Dialog from '@components/dialog/dialog';
import { TAB_TYPES, type TabType } from '@components/tab/tab/constants/tab-type';
import { CREATE_MATCH_TOAST_MESSAGE } from '@constants/error-toast';
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
import type { LayoutOutletContext } from '@routes/layout';
import { ROUTES } from '@routes/routes-config';
import { useMutation } from '@tanstack/react-query';
import { addDays, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { handleScrollLock } from '@/shared/utils/scroll-lock';
import { showErrorToast } from '@/shared/utils/show-error-toast';

const Home = () => {
  const { activeType, changeTab } = useTabState();
  const location = useLocation();
  const navigate = useNavigate();

  const { homeCalendarState, setHomeCalendarState } = useOutletContext<LayoutOutletContext>();

  const { selectedDate, baseWeekDate } = homeCalendarState;

  const entryDate = new Date();

  const [isCalendarBottomSheetOpen, setIsCalendarBottomSheetOpen] = useState(false);
  const [isMatchingCtaBottomSheetOpen, setIsMatchingCtaBottomSheetOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameCardItem | null>(null);

  const dateStr = format(selectedDate, 'yyyy-MM-dd');

  const createMatchMutation = useMutation(matchMutations.CREATE_MATCH());

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

  useEffect(() => {
    if (!location.state?.shouldShowMatchCreatedToast) return;

    showErrorToast(CREATE_MATCH_TOAST_MESSAGE, {
      offset: '8.8rem',
      icon: false,
      className: 'bg-sub-900 text-gray-black cap_14_sb',
    });

    navigate(location.pathname, {
      replace: true,
      state: {
        ...location.state,
        shouldShowMatchCreatedToast: false,
      },
    });
  }, [location.pathname, location.state, navigate]);

  // 주간 캘린더에서 날짜 선택:
  // 선택 날짜만 변경하고 현재 주간 위치는 유지
  const handleDateChange = (date: Date) => {
    setHomeCalendarState((prev) => ({
      ...prev,
      selectedDate: date,
    }));
  };

  // 월간 캘린더에서 날짜 선택:
  // 선택 날짜와 표시하는 주간을 함께 변경
  const handleDateSelect = (date: Date) => {
    setHomeCalendarState({
      selectedDate: date,
      baseWeekDate: addDays(date, WEEK_CALENDAR_START_OFFSET),
    });
  };

  const handleWeekChange = (direction: 'prev' | 'next') => {
    setHomeCalendarState((prev) => ({
      ...prev,
      baseWeekDate: addDays(prev.baseWeekDate, direction === 'next' ? 7 : -7),
    }));
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
      setIsMatchingCtaBottomSheetOpen(true);
      return;
    }

    navigate(ROUTES.GAME(dateStr, String(game.id)));
  };

  const handleMatchingCtaSubmit = (type: TabType) => {
    if (!selectedGame) return;

    const matchType = type === TAB_TYPES.SINGLE ? 'DIRECT' : 'GROUP';
    const queryType = type === TAB_TYPES.SINGLE ? 'single' : 'group';
    const gaMatchType = type === TAB_TYPES.SINGLE ? 'one_to_one' : 'group';

    gaEvent('match_create_click', {
      match_type: gaMatchType,
      role: 'creator',
    });

    createMatchMutation.mutate(
      {
        gameId: selectedGame.id,
        matchType,
      },
      {
        onSuccess: (response) => {
          const createdMatchId = response.matchId.toString();

          setIsMatchingCtaBottomSheetOpen(false);
          setSelectedGame(null);

          navigate(`${ROUTES.RESULT(createdMatchId)}?type=success&mode=${queryType}`);
        },
      },
    );
  };

  return (
    <div className="h-full bg-gray-black pt-[0.8rem] pb-[5.6rem]">
      <TopSection />

      <CalendarSection
        activeType={activeType}
        onTabChange={changeTab}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
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

      {needsMatchingSetup && (
        <div className="matching-modal-backdrop z-[var(--z-modal)] flex-col-center">
          <Dialog info={MATCHING_MODAL_DESCRIPTION}>
            <Button label="최초 매칭 조건 설정" onClick={handleComplete} />
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default Home;
