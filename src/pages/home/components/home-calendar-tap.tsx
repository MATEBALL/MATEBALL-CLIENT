import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import WeekCalendar from '@components/calendar/week-calendar';
import Icon from '@components/icon/icon';
import { addDays } from 'date-fns';
import { useState } from 'react';

const HomeCalendarTap = () => {
  const entryDate = new Date();
  const initialSelectedDate = getInitialSelectedDate(entryDate);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const baseWeekDate = addDays(selectedDate, -2);

  return (
    <div className="sticky top-[5.6rem] z-10 bg-black px-[1.6rem] pt-[2.4rem]">
      <WeekCalendar
        entryDate={new Date()}
        baseDate={baseWeekDate}
        value={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
      />
      <div className="mt-[3.5rem] flex justify-between">
        <div className="subhead_18_sb flex py-[0.6rem] text-white">
          <div>1:1</div>
          <div>그룹</div>
        </div>
        <div className="h-[3.2rem] w-[3.2rem] flex-col-center rounded-[8px] bg-gray-900">
          <Icon name="calendar" size={2.4} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default HomeCalendarTap;
