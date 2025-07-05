import Icon from '@components/Icon';
import { endOfMonth, format, isBefore, isSameDay, startOfDay, startOfMonth } from 'date-fns';
import { useState } from 'react';
import { getMonthGrid } from '../../utils/calendar';
import { calendarDayVariants } from './calendar-day-variants';

const MonthCalendar = () => {
  const [value, setValue] = useState(new Date());
  const days = getMonthGrid(value);
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);

  return (
    <div className="flex-col gap-[1.2rem]">
      <div className="flex-row-center gap-[2.4rem]">
        <Icon name="ic-arrow-left-18" width={3.2} height={3.2} className="p-[0.7rem]" />
        <p className="head_20_sb text-center text-gray-black">{format(value, 'yyyy.MM')}</p>
        <Icon name="ic-arrow-right-18" width={3.2} height={3.2} className="p-[0.7rem]" />
      </div>

      <div>
        <div className="cap_14_sb grid grid-cols-7 text-center">
          {['일', '월', '화', '수', '목', '금', '토'].map((d, idx) => (
            <div
              key={d}
              className={`px-[1.75rem] py-[1.35rem] ${idx === 0 ? 'text-week-red' : idx === 6 ? 'text-week-blue' : 'text-gray-900'}`}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="cap_14_m grid grid-cols-7 justify-items-center gap-y-[0.4rem] align-items-center">
          {days.map((day) => {
            const isSelected = isSameDay(day, value);
            const isPast = isBefore(startOfDay(day), startOfDay(new Date()));
            const isMonday = day.getDay() === 1;
            const isDisabled = isPast || isMonday;
            const isNotCurrentMonth = day < startDate || day > endDate;

            return (
              <div key={day.toISOString()} className="flex-row-center">
                <button
                  type="button"
                  onClick={() => setValue(day)}
                  disabled={isDisabled}
                  className={calendarDayVariants({
                    monthSelected: isSelected,
                    disabled: isDisabled,
                    notCurrentMonth: isNotCurrentMonth,
                    size: 'month',
                  })}
                >
                  {format(day, 'd')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthCalendar;
