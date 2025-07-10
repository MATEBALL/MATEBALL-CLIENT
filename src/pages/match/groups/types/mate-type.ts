export interface MateInfo {
  matchId: number;
  id: number;
  nickname: string;
  intro: string;
  team: string;
  type: string;
}

export interface GroupMateCardProps {
  mate: MateInfo;
}

export interface GroupMateProps {
  matchId: string;
  onRequestClick: () => void;
}
