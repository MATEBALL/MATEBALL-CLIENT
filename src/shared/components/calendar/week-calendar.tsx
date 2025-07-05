import { format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getWeekDays } from '@/shared/utils/calendar';

interface WeekCalendarProps {
  value: Date;
  onChange: (date: Date) => void;
}

const WeekCalendar = ({ value, onChange }: WeekCalendarProps) => {
  const days = getWeekDays(value);

  return (
    <div className="flex w-full flex-row justify-between bg-gray-black">
      {days.map((day) => {
        const isSelected = isSameDay(day, value);

        return (
          <button
            key={day.toISOString()}
            type="button"
            onClick={() => onChange(day)}
            className={`w-[3.8rem] cursor-pointer py-[0.8rem] ${isSelected ? 'rounded-[12px] bg-main-900' : ''}`}
          >
            <p className="body_16_m text-gray-white">{format(day, 'd')}</p>
            <p className={`cap_14_m ${isSelected ? 'text-main-400' : 'text-gray-500'}`}>
              {format(day, 'E', { locale: ko })}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default WeekCalendar;
