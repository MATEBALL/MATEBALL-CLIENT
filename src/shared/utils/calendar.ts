import { addDays, endOfMonth, isAfter, startOfMonth, startOfWeek } from 'date-fns';

export const getMonthGrid = (date: Date): Date[] => {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 0 });
  const end = addDays(endOfMonth(date), 6 - endOfMonth(date).getDay());

  const days = [];

  for (let d = start; !isAfter(d, end); d = addDays(d, 1)) {
    days.push(d);
  }
  return days;
};
