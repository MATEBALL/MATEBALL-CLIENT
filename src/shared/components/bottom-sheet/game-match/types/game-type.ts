export interface GameMatchItemProps {
  isSelected?: boolean;
  away: string;
  home: string;
  time: string;
  stadium: string;
  onClick?: () => void;
}

export interface GameMatchListProps {
  selectedIdx: number;
  onSelect: (index: number) => void;
}

export interface GameMatchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}
