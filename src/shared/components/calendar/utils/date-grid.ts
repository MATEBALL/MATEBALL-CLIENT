import { addDays, endOfMonth, getDay, isAfter, startOfMonth, startOfWeek } from 'date-fns';
import { WEEKDAY } from '@/shared/components/calendar/constants/calendar';

export const getWeekDays = (baseDate: Date): Date[] => {
  return Array.from({ length: 7 }, (_, i) => addDays(baseDate, i));
};

export const getMonthGrid = (date: Date): Date[] => {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 0 });
  const end = addDays(endOfMonth(date), 6 - endOfMonth(date).getDay());
  const days = [];

  for (let d = start; !isAfter(d, end); d = addDays(d, 1)) {
    days.push(d);
  }
  return days;
};

export const getInitialSelectedDate = (entryDate: Date): Date => {
  const base = addDays(entryDate, 2);
  return getDay(base) === WEEKDAY.MONDAY ? addDays(base, 1) : base;
};
