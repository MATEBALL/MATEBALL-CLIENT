import type { DetailedCardProps } from '@components/card/match-card/types/card';

export interface MateProps {
  matchId: number;
  onRequestClick: () => void;
  isGroupMatching?: boolean;
}

export interface SentViewProps {
  isGroupMatching?: boolean;
  userNickname: string;
}

export interface MateFooterProps {
  isGroupMatching: boolean;
  onRequestClick: () => void;
}

export interface MateHeaderProps {
  nickname: string;
  isGroupMatching?: boolean;
}

export interface MateCardData extends DetailedCardProps {
  id: number;
  matchId: number;
}
