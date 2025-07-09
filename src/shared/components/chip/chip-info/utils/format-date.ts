export const formatDate = (rawDate: string) => {
  const date = new Date(rawDate);

  if (isNaN(date.getTime())) return '';

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}월 ${day}일`;
};
