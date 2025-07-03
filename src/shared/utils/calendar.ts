import { addDays, endOfMonth, isAfter, startOfMonth, startOfWeek } from 'date-fns';

export const getWeekDays = (baseDate: Date): Date[] => {
  const start = startOfWeek(baseDate, { weekStartsOn: 0 });

  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
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
