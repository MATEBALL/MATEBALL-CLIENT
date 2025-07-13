import { format, isValid, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatToKoreanDate = (date: Date | string): string => {
  try {
    let dateObj: Date;

    if (typeof date === 'string') {
      dateObj = parseISO(date);
    } else {
      dateObj = date;
    }

    if (!isValid(dateObj)) {
      console.warn('Invalid date provided:', date);
      return '';
    }

    return format(dateObj, 'M월 d일', { locale: ko });
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};
