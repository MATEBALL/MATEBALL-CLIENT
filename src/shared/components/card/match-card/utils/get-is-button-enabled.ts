type MatchTabType = 'created' | 'requested';

export const getIsButtonEnabled = (matchTabType: MatchTabType, statusLabel: string) => {
  if (matchTabType === 'created') {
    return true;
  }

  switch (statusLabel) {
    case '수락완료':
      return true;
    default:
      return false;
  }
};
