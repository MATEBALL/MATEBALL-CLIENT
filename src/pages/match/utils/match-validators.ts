export const isInvalidMatchId = (id: string | undefined): boolean => {
  return !id || Number.isNaN(Number(id));
};
