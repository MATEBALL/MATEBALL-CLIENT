export const WEEKDAY = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
} as const;

export const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const WEEK_DAY_COLORS: Record<(typeof WEEK_DAYS)[number], string> = {
  일: 'text-week-red',
  월: 'text-gray-900',
  화: 'text-gray-900',
  수: 'text-gray-900',
  목: 'text-gray-900',
  금: 'text-gray-900',
  토: 'text-week-blue',
};
