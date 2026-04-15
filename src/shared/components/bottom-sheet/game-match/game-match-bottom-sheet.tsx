import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import GameMatchFooter from '@components/bottom-sheet/game-match/game-match-footer';
import GameMatchList from '@components/bottom-sheet/game-match/game-match-list';
import { formatDateWeekday } from '@components/bottom-sheet/game-match/utils/format-date-weekday';
import { TAB_TYPES, type TabType } from '@components/tab/tab/constants/tab-type';
import { gaEvent } from '@libs/analytics';
import type { SelectedGame } from '@pages/onboarding/components/date-select';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface GameMatchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  gameSchedule: SelectedGame[];
  onClick?: (selectedId: number | null) => void;
  activeType: TabType;
  fromOnboarding?: boolean;
  onComplete?: (selected: { game: SelectedGame; date: string }) => void;
}

const GameMatchBottomSheet = ({
  isOpen,
  onClose,
  date,
  gameSchedule,
  activeType,
  fromOnboarding = false,
  onComplete,
}: GameMatchBottomSheetProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createMatchMutation = useMutation(matchMutations.CREATE_MATCH());

  const disabled = selectedIdx === null || createMatchMutation.isPending;
  const matchType = activeType === TAB_TYPES.SINGLE ? 'DIRECT' : 'GROUP';
  const queryType = activeType === TAB_TYPES.SINGLE ? 'single' : 'group';

  const handleClose = () => {
    setSelectedIdx(null);
    onClose();
  };

  const handleSubmit = () => {
    if (selectedIdx === null) return;

    const selectedGame = gameSchedule[selectedIdx];
    if (!selectedGame) return;

    if (fromOnboarding) {
      handleClose();
      onComplete?.({
        game: selectedGame,
        date,
      });
      return;
    }

    const gaMatchType = activeType === TAB_TYPES.SINGLE ? 'one_to_one' : 'group';
    gaEvent('match_create_click', {
      match_type: gaMatchType,
      role: 'creator',
    });

    createMatchMutation.mutate(
      {
        gameId: selectedGame.id,
        matchType,
      },
      {
        onSuccess: (response) => {
          const createdMatchId = response.matchId.toString();

          if (matchType === 'DIRECT') {
            queryClient.invalidateQueries({
              queryKey: matchQueries.SINGLE_MATCH_LIST(date).queryKey,
            });
          } else {
            queryClient.invalidateQueries({
              queryKey: matchQueries.GROUP_MATCH_LIST(date).queryKey,
            });
          }

          handleClose();
          navigate(`${ROUTES.MATCH_CREATE(createdMatchId)}?type=${queryType}`);
        },
      },
    );
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
