import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import GameMatchList from '@components/bottom-sheet/game-match/game-match-list';
import GameMatchFooter from '@components/bottom-sheet/game-match/game-match-footer';
import type { GameScheduleItem } from '@components/bottom-sheet/game-match/types/game-type';
import { formatDateWeekday } from '@components/bottom-sheet/game-match/utils/format-date-weekday';
import { useState } from 'react';

interface GameMatchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  gameSchedule: GameScheduleItem[];
}

const GameMatchBottomSheet = ({
  isOpen,
  onClose,
  date,
  gameSchedule,
}: GameMatchBottomSheetProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} showIndicator gap="gap-[1.6rem]">
      <div className="w-full flex-col">
        <div className="w-full flex-col px-[1.6rem] gap-[1.3rem]">
          <div className="body_16_m text-gray-black">{formatDateWeekday(date)}</div>
          <GameMatchList
            selectedIdx={selectedIdx}
            onSelect={setSelectedIdx}
            matches={gameSchedule}
          />
        </div>
      </div>

      <GameMatchFooter />
    </BottomSheet>
  );
};

export default GameMatchBottomSheet;
