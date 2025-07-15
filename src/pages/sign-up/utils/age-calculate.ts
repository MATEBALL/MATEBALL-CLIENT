export const isAdult = (birthYear: number) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear >= 20;
};
