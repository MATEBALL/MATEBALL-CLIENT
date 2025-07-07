import { getMonthGrid } from '@components/calendar/utils/date-grid';
import Icon from '@components/icon/icon';
import {
  addMonths,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  startOfDay,
  startOfMonth,
  subMonths,
} from 'date-fns';
import {
  WEEK_DAY_COLORS,
  WEEK_DAYS,
  WEEKDAY,
} from '@/shared/components/calendar/constants/calendar';
import { calendarDayVariants } from '@/shared/components/calendar/styles/calendar-day-variants';

interface MonthCalendarProps {
  value: Date;
  onWeekChange: (date: Date) => void;
  onMonthChange: (date: Date) => void;
}

const MonthCalendar = ({ value, onWeekChange, onMonthChange }: MonthCalendarProps) => {
  const days = getMonthGrid(value);
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);

  return (
    <div className="flex-col gap-[1.2rem]">
      <div className="flex-row-center gap-[2.4rem]">
        <Icon
          name="ic-arrow-left"
          width={3.2}
          height={3.2}
          className="cursor-pointer p-[0.7rem]"
          onClick={() => onMonthChange(subMonths(value, 1))}
        />
        <p className="head_20_sb text-center text-gray-black">{format(value, 'yyyy.MM')}</p>
        <Icon
          name="ic-arrow-right-18"
          width={3.2}
          height={3.2}
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
            const isSelected = isSameDay(day, value);
            const isPast = isBefore(startOfDay(day), startOfDay(new Date()));
            const isMonday = day.getDay() === WEEKDAY.MONDAY;
            const isDisabled = isPast || isMonday;
            const isNotCurrentMonth = day < startDate || day > endDate;

            return (
              <div key={day.toISOString()} className="flex-row-center">
                <button
                  type="button"
                  onClick={() => onWeekChange(day)}
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
