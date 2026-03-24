import { getWeekDays } from '@components/calendar/utils/date-grid';
import { cn } from '@libs/cn';
import { format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import { calendarDayVariants } from '@/shared/components/calendar/styles/calendar-day-variants';

interface WeekCalendarProps {
  entryDate: Date;
  baseDate: Date;
  value: Date;
  onChange: (date: Date) => void;
}

const WeekCalendar = ({ baseDate, value, onChange }: WeekCalendarProps) => {
  const days = getWeekDays(baseDate);

  return (
    <div className="w-full flex-row-between gap-[1.2rem]">
      {days.map((day) => {
        const isSelected = isSameDay(day, value);

        const dateColor = 'text-gray-white';
        const dayColor = isSelected ? 'text-main-400' : 'text-gray-500';

        const handleClick = (day: Date) => {
          onChange(day);
        };

        return (
          <button
            key={day.toISOString()}
            type="button"
            onClick={() => handleClick(day)}
            className={calendarDayVariants({
              weekSelected: isSelected,
              size: 'week',
            })}
          >
            <p className={cn('body_16_m', dateColor)}>{format(day, 'd')}</p>
            <p className={cn('cap_14_m', dayColor)}>{format(day, 'E', { locale: ko })}</p>
          </button>
        );
      })}
    </div>
  );
};

export default WeekCalendar;
