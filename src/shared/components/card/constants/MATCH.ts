import type { ProfileType } from '@components/card/match-card/components/card-profile-image';

export const GROUP_MAX = 4;

export const PROFILE_SLOT_COUNT: Record<ProfileType, number> = {
  group: 4,
  single: 1,
  detailed: 1,
  user: 1,
};
