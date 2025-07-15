import { useEffect, useState } from 'react';
import { format, addDays } from 'date-fns';

import TopSection from '@pages/home/components/top-section';
import CalendarSection from '@pages/home/components/calendar-section';
import MatchListSection from '@pages/home/components/match-list-section';
import CalendarBottomSheet from '@pages/home/components/calendar-bottom-sheet';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';

import { useTabState } from '@hooks/use-tab-state';
import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENDAR';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import type { ApiResponse } from '@/shared/types/base-types';

interface GameSchedule {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}

const Home = () => {
  const { activeType, changeTab, isSingle, isGroup } = useTabState();
  const entryDate = new Date();
  const initialSelectedDate = getInitialSelectedDate(entryDate);

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [baseWeekDate, setBaseWeekDate] = useState(
    addDays(initialSelectedDate, WEEK_CALENDAR_START_OFFSET)
  );
  const [isCalendarBottomSheetOpen, setIsCalendarBottomSheetOpen] = useState(false);
  const [isGameInfoBottomSheetOpen, setIsGameInfoBottomSheetOpen] = useState(false);
  const [gameSchedule, setGameSchedule] = useState<GameSchedule[]>([]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setBaseWeekDate(date);
  };

useEffect(() => {
  const fetchGameSchedule = async () => {
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    try {
      const res = await get<ApiResponse<{ gameSchedule: GameSchedule[] }>>(
        END_POINT.GET_GAME_SCHEDULE(dateStr)
      );
      setGameSchedule(res.gameSchedule ?? []);
    } catch (error) {
      console.error('경기 정보 조회 실패', error);
      setGameSchedule([]);
    }
  };

  fetchGameSchedule();
}, [selectedDate]);


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
        gameSchedule={gameSchedule}
        activeType={activeType}
      />
    </div>
  );
};

export default Home;
