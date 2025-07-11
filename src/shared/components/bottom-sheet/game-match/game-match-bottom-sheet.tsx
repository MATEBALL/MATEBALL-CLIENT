import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import GameMatchFooter from '@components/bottom-sheet/game-match/game-match-footer';
import GameMatchList from '@components/bottom-sheet/game-match/game-match-list';
import type { GameMatchBottomSheetProps } from '@components/bottom-sheet/game-match/types/game-type';
import { formatDateWeekday } from '@components/bottom-sheet/game-match/utils/format-date-weekday';
import { useState } from 'react';

const GameMatchBottomSheet = ({
  isOpen,
  onClose,
  date,
  gameSchedule,
}: GameMatchBottomSheetProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleClose = () => {
    setSelectedIdx(null);
    onClose();
  };

  const handleSubmit = () => {
    // TODO: 선택된 경기(selectedIdx)에 대한 처리 로직 추가
    console.log('선택된 경기 ID:', selectedIdx !== null ? gameSchedule[selectedIdx]?.id : null);
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose} showIndicator gap="gap-[1.6rem]">
      <div className="w-full flex-col">
        <div className="w-full flex-col gap-[1.3rem] px-[1.6rem]">
          <div className="body_16_m text-gray-black">{formatDateWeekday(date)}</div>
          <GameMatchList
            selectedIdx={selectedIdx}
            onSelect={setSelectedIdx}
            matches={gameSchedule}
          />
        </div>
      </div>

      <GameMatchFooter onSubmit={handleSubmit} />
    </BottomSheet>
  );
};

export default GameMatchBottomSheet;
