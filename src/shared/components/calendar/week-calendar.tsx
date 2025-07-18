import { WEEKDAY } from '@components/calendar/constants/CALENDAR';
import { getWeekDays } from '@components/calendar/utils/date-grid';
import { DATE_SELECT_TOAST_MESSAGE } from '@constants/error-toast';
import { cn } from '@libs/cn';
import { addDays, format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import { calendarDayVariants } from '@/shared/components/calendar/styles/calendar-day-variants';
import { showErrorToast } from '@/shared/utils/show-error-toast';

interface WeekCalendarProps {
  entryDate: Date;
  baseDate: Date;
  value: Date;
  onChange: (date: Date) => void;
}

const WeekCalendar = ({ entryDate, baseDate, value, onChange }: WeekCalendarProps) => {
  const days = getWeekDays(baseDate);

  return (
    <div className="w-full flex-row-between gap-[1.2rem]">
      {days.map((day) => {
        const isSelected = isSameDay(day, value);
        const isMonday = day.getDay() === WEEKDAY.MONDAY;

        const dateColor = isMonday ? 'text-gray-600' : 'text-gray-white';
        const dayColor = isSelected
          ? 'text-main-400'
          : isMonday
            ? 'text-gray-600'
            : 'text-gray-500';

        const handleClick = (day: Date) => {
          const isBlocked = day <= addDays(entryDate, 1);

          if (isBlocked) {
            showErrorToast(DATE_SELECT_TOAST_MESSAGE, {
              bottom: '4.6rem',
            });
            return;
          }
          onChange(day);
        };

        return (
          <button
            key={day.toISOString()}
            type="button"
            onClick={() => handleClick(day)}
            disabled={isMonday}
            className={calendarDayVariants({
              weekSelected: isSelected,
              disabled: isMonday,
              isMonday,
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
