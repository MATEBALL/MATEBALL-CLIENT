import { getWeekDays } from '@components/calendar/utils/date-grid';
import { cn } from '@libs/cn';
import { format, isBefore, isSameDay, startOfDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { calendarDayVariants } from '@/shared/components/calendar/styles/calendar-day-variants';

interface WeekCalendarProps {
  entryDate: Date;
  baseDate: Date;
  value: Date;
  onChange: (date: Date) => void;
  onWeekChange?: (direction: 'prev' | 'next') => void;
}

const SWIPE_THRESHOLD = 50;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const WeekCalendar = ({
  entryDate,
  baseDate,
  value,
  onChange,
  onWeekChange,
}: WeekCalendarProps) => {
  const days = getWeekDays(baseDate);
  const directionRef = useRef(0);
  const touchStartXRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < SWIPE_THRESHOLD || !onWeekChange) return;

    if (diff > 0) {
      directionRef.current = 1;
      onWeekChange('next');
    } else {
      directionRef.current = -1;
      onWeekChange('prev');
    }
  };

  return (
    <div
      className="w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="popLayout" initial={false} custom={directionRef.current}>
        <motion.div
          key={baseDate.toISOString()}
          custom={directionRef.current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="w-full flex-row-between gap-[1.2rem]"
        >
          {days.map((day) => {
            const isSelected = isSameDay(day, value);
            const isDisabled = isBefore(startOfDay(day), startOfDay(entryDate));

            const dateColor = 'text-gray-white';
            const dayColor = isSelected ? 'text-main-400' : 'text-gray-500';

            const handleClick = (day: Date) => {
              if (isDisabled) return;
              onChange(day);
            };

            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={isDisabled}
                onClick={() => handleClick(day)}
                className={calendarDayVariants({
                  weekSelected: isSelected,
                  disabled: isDisabled,
                  size: 'week',
                })}
              >
                <p className={cn('body_16_m', dateColor)}>{format(day, 'd')}</p>
                <p className={cn('cap_14_m', dayColor)}>{format(day, 'E', { locale: ko })}</p>
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WeekCalendar;
