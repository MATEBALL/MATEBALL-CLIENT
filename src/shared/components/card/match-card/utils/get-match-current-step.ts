type MatchTabType = 'created' | 'requested';

export const getMatchCurrentStep = (status?: string, matchTabType?: MatchTabType) => {
  if (!status || !matchTabType) return 1;

  if (matchTabType === 'created') {
    switch (status) {
      case '매칭생성':
        return 0;
      case '그룹원 모집중':
        return 1;
      case '매칭완료':
      case '완료':
        return 2;
      default:
        return 0;
    }
  }

  switch (status) {
    case '요청':
      return 0;
    case '수락 대기 중':
      return 1;
    case '수락완료':
    case '완료':
      return 2;
    default:
      return 0;
  }
};
