import { cn } from '@libs/cn';
import { format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getWeekDays } from '@/shared/utils/calendar';
import { calendarDayVariants } from './calendar-day-variants';

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
            className={calendarDayVariants({
              weekSelected: isSelected,
              disabled: isMonday,
              isMonday,
              size: 'week',
            })}
          >
            <p className={cn('body_16_m', isMonday ? 'text-gray-600' : 'text-gray-white')}>
              {format(day, 'd')}
            </p>
            <p
              className={cn(
                'cap_14_m',
                isSelected ? 'text-main-400' : isMonday ? 'text-gray-600' : 'text-gray-500',
              )}
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
