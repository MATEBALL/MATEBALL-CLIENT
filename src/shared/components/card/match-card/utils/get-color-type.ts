import type { ChipColorType } from '@components/card/match-card/types/card';

export const getColorType = (status?: string, explicitColorType?: ChipColorType): ChipColorType => {
  if (explicitColorType) return explicitColorType;
  if (!status) return 'inactive';

  if (status.includes('매칭 완료') || status.includes('새 요청')) {
    return 'active';
  }

  if (status.includes('승인 완료')) {
    return 'outline';
  }

  if (status.includes('실패')) {
    return 'dark';
  }

  if (status.includes('대기')) {
    return 'inactive';
  }

  return 'inactive';
};
