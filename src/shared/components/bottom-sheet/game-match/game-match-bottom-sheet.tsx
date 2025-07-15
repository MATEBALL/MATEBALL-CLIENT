import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import GameMatchFooter from '@components/bottom-sheet/game-match/game-match-footer';
import GameMatchList from '@components/bottom-sheet/game-match/game-match-list';
import { formatDateWeekday } from '@components/bottom-sheet/game-match/utils/format-date-weekday';
import { TAB_TYPES, type TabType } from '@components/tab/tab/constants/tab-type';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface GameScheduleItem {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}

interface GameMatchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  gameSchedule: GameScheduleItem[];
  onClick?: (selectedId: number | null) => void;
  activeType: TabType;
}

const GameMatchBottomSheet = ({
  isOpen,
  onClose,
  date,
  gameSchedule,
  activeType,
}: GameMatchBottomSheetProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const matchId = 1; //임시 설정용
  const navigate = useNavigate();
  const navigateToMatchCreate = (matchId: number, type: 'single' | 'group') => {
    navigate(`/match/create/${matchId}?type=${type}`);
  };

  const handleClose = () => {
    setSelectedIdx(null);
    onClose();
  };

  const disabled = selectedIdx === null;

  const handleSubmit = () => {
    if (selectedIdx === null) return;

    const selectedGame = gameSchedule[selectedIdx];
    if (!selectedGame) return;

    const queryType = activeType === TAB_TYPES.SINGLE ? 'single' : 'group';
    navigateToMatchCreate(matchId, queryType);
    handleClose();

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

      <GameMatchFooter disabled={disabled} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};

export default GameMatchBottomSheet;
