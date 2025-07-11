import MonthCalendar from '@components/calendar/month-calendar';
import { addDays, startOfDay } from 'date-fns';
import { useState } from 'react';

const DateSelect = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(startOfDay(new Date()), 2)); // 2일 뒤부터 선택 가능

  const handleWeekChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="flex-col-center">
        <p className="head_20_sb text-gray-black">어떤 경기를 직관하고 싶으신가요?</p>
        <p className="cap_14_m text-gray-600">
          단, 직관 준비를 위해 2일 이후 날짜부터 선택 가능해요.
        </p>
      </div>

      <MonthCalendar
        value={selectedDate}
        onWeekChange={handleWeekChange}
        onMonthChange={handleMonthChange}
      />
    </>
  );
};

export default DateSelect;
