import { gameQueries } from '@apis/game/game-queries';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
import MonthCalendar from '@components/calendar/month-calendar';
import type { TabType } from '@components/tab/tab/tab-content';
import { NO_GAME_TOAST_MESSAGE } from '@constants/error-toast';
import queryClient from '@libs/query-client';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useState } from 'react';
import { showErrorToast } from '@/shared/utils/show-error-toast';

export interface SelectedGame {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}

interface DateSelectProps {
  onComplete: (selected: { game: SelectedGame; date: string }) => void;
  activeType: TabType;
}

const DateSelect = ({ onComplete, activeType }: DateSelectProps) => {
  const entryDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(entryDate);
  const [currentMonth, setCurrentMonth] = useState<Date>(entryDate);

  const { isOpen, open, close } = useBottomSheet();

  const handleDateSelect = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');

    queryClient.fetchQuery(gameQueries.GAME_LIST(dateStr)).then((games) => {
      if (!games || games.length === 0) {
        showErrorToast(NO_GAME_TOAST_MESSAGE, { offset: '2.4rem', icon: false });
        return;
      }

      setSelectedDate(date);
      open();
    });
  };

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
    setSelectedDate(null);
  };

  const dateStr = format(selectedDate ?? new Date(), 'yyyy-MM-dd');
  const { data } = useQuery({
    ...gameQueries.GAME_LIST(dateStr),
    enabled: !!selectedDate,
  });

  return (
    <div className="h-full w-full flex-col-between gap-[5.6rem] px-[1.6rem] pt-[3.2rem]">
      <div className="flex-col-center gap-[0.8rem]">
        <p className="head_20_sb text-gray-black">어떤 경기를 직관하고 싶으신가요?</p>
      </div>

      <div className="w-full flex-grow">
        <MonthCalendar
          entryDate={entryDate}
          value={currentMonth}
          selectedDate={selectedDate}
          onWeekChange={handleDateSelect}
          onMonthChange={handleMonthChange}
          toastBottomOffset="2.4rem"
        />
      </div>

      <GameMatchBottomSheet
        isOpen={isOpen}
        onClose={close}
        date={format(selectedDate ?? new Date(), 'yyyy-MM-dd')}
        gameSchedule={data ?? []}
        activeType={activeType}
        fromOnboarding
        onComplete={onComplete}
      />
    </div>
  );
};

export default DateSelect;
