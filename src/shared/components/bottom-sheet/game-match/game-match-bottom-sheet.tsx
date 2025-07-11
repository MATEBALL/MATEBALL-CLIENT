import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import GameMatchList from '@components/bottom-sheet/game-match/game-match-list';
import GameMatchFooter from '@components/bottom-sheet/game-match/game-match-footer';
import { useState } from 'react';

interface GameMatchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameMatchBottomSheet = ({ isOpen, onClose }: GameMatchBottomSheetProps) => {
  const [selectedIdx, setSelectedIdx] = useState(2);

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} showIndicator={true} gap="gap-[1.6rem]">
      <div className="w-full px-4 flex-col">
        <div className="w-full flex-col px-[1.6rem] gap-[1.3rem]">
          <div className="body_16_m text-gray-black">7월 17일 화요일</div>
          <GameMatchList selectedIdx={selectedIdx} onSelect={setSelectedIdx} />
        </div>
      </div>

      <GameMatchFooter />
    </BottomSheet>
  );
};

export default GameMatchBottomSheet;
