export const formatDate = (rawDate: string) => {
  try {
    const date = new Date(rawDate);
    if (isNaN(date.getTime())) return '';

    const options: Intl.DateTimeFormatOptions = {
      month: 'numeric',
      day: 'numeric',
      timeZone: 'Asia/Seoul',
    };

    const formatted = date.toLocaleString('ko-KR', options);
    const [month, day] = formatted.split('. ').map((v) => v.replace('.', '').trim());

    return `${month}월 ${day}일`;
  } catch {
    return '';
  }
};
