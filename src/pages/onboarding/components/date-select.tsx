import { gameQueries } from '@apis/game/game-queries';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
import MonthCalendar from '@components/calendar/month-calendar';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import { TAB_TYPES } from '@components/tab/tab/constants/tab-type';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useState } from 'react';

const DateSelect = () => {
  const initialSelectedDate = getInitialSelectedDate(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialSelectedDate);
  const [currentMonth, setCurrentMonth] = useState<Date>(initialSelectedDate);
  const activeType = TAB_TYPES.GROUP;

  const { isOpen, open, close } = useBottomSheet();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    open();
  };

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
    setSelectedDate(null);
  };

  const dateStr = format(selectedDate ?? new Date(), 'yyyy-MM-dd');
  const { data } = useQuery({
    ...gameQueries.GAME_LIST(dateStr),
  });

  return (
    <div className="h-full w-full flex-col-between gap-[5.6rem] px-[1.6rem] pt-[3.2rem]">
      <div className="flex-col-center gap-[0.8rem]">
        <p className="head_20_sb text-gray-black">어떤 경기를 직관하고 싶으신가요?</p>
        <p className="cap_14_m text-gray-600">
          단, 직관 준비를 위해 2일 이후 날짜부터 선택 가능해요.
        </p>
      </div>

      <div className="w-full flex-grow">
        <MonthCalendar
          value={currentMonth}
          selectedDate={selectedDate}
          onWeekChange={handleDateSelect}
          onMonthChange={handleMonthChange}
        />
      </div>

      <GameMatchBottomSheet
        isOpen={isOpen}
        onClose={close}
        date={format(selectedDate ?? new Date(), 'yyyy-MM-dd')}
        gameSchedule={data ?? []}
        activeType={activeType}
        fromOnboarding={true}
      />
    </div>
  );
};

export default DateSelect;
