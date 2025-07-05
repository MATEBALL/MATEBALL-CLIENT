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
    <div className="w-full flex-row-between gap-[1.2rem]">
      {days.map((day) => {
        const isSelected = isSameDay(day, value);
        const isMonday = day.getDay() === 1;

        return (
          <button
            key={day.toISOString()}
            type="button"
            onClick={() => onChange(day)}
            disabled={isMonday}
            className={`w-[3.8rem] py-[0.8rem] ${isSelected ? 'rounded-[12px] bg-main-900' : ''} ${isMonday ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <p className={`body_16_m ${isMonday ? 'text-gray-600' : 'text-gray-white'} `}>
              {format(day, 'd')}
            </p>
            <p
              className={`cap_14_m ${isSelected ? 'text-main-400' : isMonday ? 'text-gray-600' : 'text-gray-500'}`}
            >
              {format(day, 'E', { locale: ko })}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default WeekCalendar;
