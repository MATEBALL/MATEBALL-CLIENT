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
  onSelect: (index: number) => void;
}

export interface GameMatchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  dateText: string;
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
