import type { VariantProps } from 'class-variance-authority';
import type { chipStateVariants } from '../../../chip/chip-state/styles/chip-state-variants';

type ColorType = NonNullable<VariantProps<typeof chipStateVariants>['colorType']>;

export const STATUS_COLOR_MAP: Record<string, ColorType> = {
  // active
  '매칭 완료': 'active',
  '새 요청': 'active',
  '승인 완료': 'active',

  // inactive
  '승인 대기 중': 'inactive',
  '요청 대기 중': 'inactive',
  '매칭 실패': 'inactive',
};

export const getColorType = (status?: string, explicitColorType?: ColorType): ColorType => {
  if (explicitColorType) {
    return explicitColorType;
  }

  if (status && STATUS_COLOR_MAP[status]) {
    return STATUS_COLOR_MAP[status];
  }

  return 'inactive';
};
