export interface GameMatchItemProps {
  isSelected?: boolean;
  away: string;
  home: string;
  time: string;
  stadium: string;
  onClick?: () => void;
}

export interface GameMatchListProps {
  selectedIdx: number | null;
  onSelect: (idx: number) => void;
  matches: GameScheduleItem[];
}

export interface GameMatchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  gameSchedule: GameScheduleItem[];
}

export interface GameScheduleItem {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}

export interface GameScheduleResponse {
  status: number;
  message: string;
  data: {
    gameSchedule: GameScheduleItem[];
  };
}
