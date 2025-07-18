import { WEEK_DAY_COLORS, WEEK_DAYS, WEEKDAY } from '@components/calendar/constants/CALENDAR';
import { calendarDayVariants } from '@components/calendar/styles/calendar-day-variants';
import { getMonthGrid } from '@components/calendar/utils/date-grid';
import Icon from '@components/icon/icon';
import { DATE_SELECT_TOAST_MESSAGE } from '@constants/error-toast';
import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  startOfDay,
  startOfMonth,
  subMonths,
} from 'date-fns';
import { showErrorToast } from '@/shared/utils/show-error-toast';

interface MonthCalendarProps {
  entryDate: Date;
  value: Date;
  selectedDate?: Date | null;
  onWeekChange: (date: Date) => void;
  onMonthChange: (date: Date) => void;
  toastBottomOffset?: '4.6rem' | '5.3rem' | '-1.4rem';
}

const MonthCalendar = ({
  entryDate,
  value,
  selectedDate,
  onWeekChange,
  onMonthChange,
  toastBottomOffset,
}: MonthCalendarProps) => {
  const days = getMonthGrid(value);
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);

  return (
    <div className="w-full flex-col gap-[1.2rem]">
      <div className="flex-row-center gap-[2.4rem]">
        <Icon
          name="arrow-left"
          width={3.2}
          height={3.2}
          className="cursor-pointer p-[0.7rem]"
          onClick={() => onMonthChange(subMonths(value, 1))}
        />
        <p className="head_20_sb text-center text-gray-black">{format(value, 'yyyy.MM')}</p>
        <Icon
          name="arrow-left"
          width={3.2}
          height={3.2}
          rotate={180}
          className="cursor-pointer p-[0.7rem]"
          onClick={() => onMonthChange(addMonths(value, 1))}
        />
      </div>

      <div>
        <div className="cap_14_sb grid grid-cols-7 text-center">
          {WEEK_DAYS.map((d) => (
            <div key={d} className={`px-[1.75rem] py-[1.35rem] ${WEEK_DAY_COLORS[d]}`}>
              {d}
            </div>
          ))}
        </div>
        <div className="cap_14_m grid grid-cols-7 justify-items-center gap-y-[0.4rem]">
          {days.map((day) => {
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
            const isPast = isBefore(startOfDay(day), startOfDay(new Date()));
            const isMonday = day.getDay() === WEEKDAY.MONDAY;
            const isDisabled = isPast || isMonday;
            const isNotCurrentMonth = day < startDate || day > endDate;

            const handleClick = (day: Date) => {
              const isBlocked = day <= addDays(entryDate, 1);
              if (isBlocked) {
                showErrorToast(DATE_SELECT_TOAST_MESSAGE, {
                  bottom: toastBottomOffset ?? '-1.4rem',
                });
                return;
              }
              onWeekChange(day);
            };

            return (
              <div key={day.toISOString()} className="flex-row-center">
                <button
                  type="button"
                  onClick={() => handleClick(day)}
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
