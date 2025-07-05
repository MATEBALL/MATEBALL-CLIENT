import Icon from '@components/Icon';
import { format, isBefore, isSameDay, startOfDay } from 'date-fns';
import { useState } from 'react';
import { getMonthGrid } from '../../utils/calendar';

const MonthCalendar = () => {
  const [value, setValue] = useState(new Date());
  const days = getMonthGrid(value);

  return (
    <div className="flex flex-col gap-[1.2rem]">
      {/* TODO: flex 유틸리티 적용 */}
      <div className="flex flex-row justify-center gap-[2.4rem]">
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
            const isPast = isBefore(startOfDay(day), startOfDay(new Date()));
            const isMonday = day.getDay() === 1;
            const isSelected = isSameDay(day, value);

            return (
              <div
                key={day.toISOString()}
                className="flex h-[4.8rem] w-[4.8rem] items-center justify-center"
              >
                <button
                  type="button"
                  onClick={() => setValue(day)}
                  disabled={isPast || isMonday}
                  className={` ${isSelected ? 'h-[4rem] w-[4rem] rounded-[8px] bg-main-900 text-gray-white' : 'px-[1.65rem] py-[1.35rem]'} ${isPast || isMonday ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer text-gray-900'}`}
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
