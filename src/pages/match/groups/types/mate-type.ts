export interface MateInfo {
  matchId: number;
  id?: number;
  nickname: string;
  intro: string;
  team: string;
  type: string;
}

export interface MateCardProps {
  mate: MateInfo;
}

export interface MateProps {
  matchId: number;
  onRequestClick: () => void;
  isGroupMatching?: boolean;
}
