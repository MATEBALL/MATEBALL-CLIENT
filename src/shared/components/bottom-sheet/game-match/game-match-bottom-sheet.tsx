import { matchMutations } from '@apis/match/match-mutations';
import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import GameMatchFooter from '@components/bottom-sheet/game-match/game-match-footer';
import GameMatchList from '@components/bottom-sheet/game-match/game-match-list';
import { formatDateWeekday } from '@components/bottom-sheet/game-match/utils/format-date-weekday';
import { TAB_TYPES, type TabType } from '@components/tab/tab/constants/tab-type';
import { MATCH_REQUEST_ERROR_MESSAGES } from '@constants/error-toast';
import Loading from '@pages/loading/loading';
import { ROUTES } from '@routes/routes-config';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showErrorToast } from '@/shared/utils/show-error-toast';

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
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const createMatchMutation = useMutation(matchMutations.CREATE_MATCH());

  const disabled = selectedIdx === null || createMatchMutation.isPending || isNavigating;
  const matchType = activeType === TAB_TYPES.SINGLE ? 'direct' : 'group';
  const queryType = activeType === TAB_TYPES.SINGLE ? 'single' : 'group';

  const handleClose = () => {
    if (isNavigating) return;
    setSelectedIdx(null);
    onClose();
  };

  const handleSubmit = async () => {
    if (selectedIdx === null) return;
    const selectedGame = gameSchedule[selectedIdx];
    if (!selectedGame) return;

    createMatchMutation.mutate(
      {
        gameId: selectedGame.id,
        matchType,
      },
      {
        onSuccess: (response) => {
          const createdMatchId = response.matchId.toString();

          handleClose();

          setIsNavigating(true);

          setTimeout(() => {
            navigate(`${ROUTES.MATCH_CREATE(createdMatchId)}?type=${queryType}`);
          }, 2000);
        },
        onError: (error) => {
          setIsNavigating(false);
          const status = (error as AxiosError)?.response?.status;

          if (status === MATCH_REQUEST_ERROR_MESSAGES.TOO_MANY_REQUESTS.status) {
            showErrorToast(MATCH_REQUEST_ERROR_MESSAGES.TOO_MANY_REQUESTS.message, {
              bottom: '5.3rem',
            });
          } else if (status === MATCH_REQUEST_ERROR_MESSAGES.DUPLICATE_MATCH.status) {
            showErrorToast(MATCH_REQUEST_ERROR_MESSAGES.DUPLICATE_MATCH.message, {
              bottom: '5.3rem',
            });
          }
        },
      },
    );
  };

  if (isNavigating) {
    return <Loading />;
  }
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
