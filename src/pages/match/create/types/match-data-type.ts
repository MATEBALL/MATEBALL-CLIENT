import type { GroupCardProps, SingleCardProps } from '@components/card/match-card/types/card';

export type MatchCardData =
  | (SingleCardProps & { id: number; type: 'single' })
  | (GroupCardProps & { id: number; type: 'group' });
