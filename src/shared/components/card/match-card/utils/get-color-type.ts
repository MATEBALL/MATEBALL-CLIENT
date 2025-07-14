import { STATUS_KEYWORDS } from '@components/card/match-card/constants/status';
import type { ChipColorType } from '@components/card/match-card/types/card';

export const getColorType = (status?: string, explicitColorType?: ChipColorType): ChipColorType => {
  if (explicitColorType) return explicitColorType;
  if (!status) return 'inactive';

  if (
    status.includes(STATUS_KEYWORDS.MATCHING_COMPLETE) ||
    status.includes(STATUS_KEYWORDS.NEW_REQUEST)
  )
    return 'active';

  if (status.includes(STATUS_KEYWORDS.APPROVAL_COMPLETE)) return 'outline';
  if (status.includes(STATUS_KEYWORDS.FAILED)) return 'dark';
  if (status.includes(STATUS_KEYWORDS.WAITING)) return 'inactive';

  return 'inactive';
};
