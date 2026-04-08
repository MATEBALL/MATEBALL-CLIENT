import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import MatchingCtaBottomSheet from '@components/bottom-sheet/matching-cta/matching-cta-bottom-sheet';
import Card from '@components/card/match-card/card';
import Icon from '@components/icon/icon';
import { TAB_TYPES } from '@components/tab/tab/constants/tab-type';
import type { TabType } from '@components/tab/tab/tab-content';
import { HAS_DONE_TOAST_MESSAGE } from '@constants/error-toast';
import { gaEvent } from '@libs/analytics';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { showErrorToast } from '@/shared/utils/show-error-toast';

interface LayoutOutletContext {
  setHeaderTitle: (title: string) => void;
}

const Game = () => {
  const { gameId } = useParams();
  const { setHeaderTitle } = useOutletContext<LayoutOutletContext>();
  const parsedGameId = Number(gameId);
  const navigate = useNavigate();

  const [isMatchingCtaBottomSheetOpen, setIsMatchingCtaBottomSheetOpen] = useState(false);

  const { data: gameMatchData } = useQuery({
    ...matchQueries.GAME_MATCH_LIST(parsedGameId),
    enabled: Number.isFinite(parsedGameId),
  });

  const createMatchMutation = useMutation(matchMutations.CREATE_MATCH());

  const hasCreatedMatch = gameMatchData?.result?.some((match) => match.matchRate === null);

  const gameSchedule = gameMatchData
    ? [
        {
          id: parsedGameId,
          awayTeam: gameMatchData.awayTeam,
          homeTeam: gameMatchData.homeTeam,
          gameTime: '',
          stadium: gameMatchData.stadium,
        },
      ]
    : [];

  const handleCreateMatchClick = () => {
    if (hasCreatedMatch) {
      showErrorToast(HAS_DONE_TOAST_MESSAGE, { offset: '2.4rem', icon: false });
      return;
    }

    setIsMatchingCtaBottomSheetOpen(true);
  };

  const handleMatchingCtaSubmit = (type: TabType) => {
    if (!Number.isFinite(parsedGameId)) return;

    const matchType = type === TAB_TYPES.SINGLE ? 'DIRECT' : 'GROUP';
    const queryType = type === TAB_TYPES.SINGLE ? 'single' : 'group';
    const gaMatchType = type === TAB_TYPES.SINGLE ? 'one_to_one' : 'group';

    gaEvent('match_create_click', {
      match_type: gaMatchType,
      role: 'creator',
    });

    createMatchMutation.mutate(
      {
        gameId: parsedGameId,
        matchType,
      },
      {
        onSuccess: (response) => {
          const createdMatchId = response.matchId.toString();

          setIsMatchingCtaBottomSheetOpen(false);

          navigate(`${ROUTES.RESULT(createdMatchId)}?type=success&mode=${queryType}`);
        },
      },
    );
  };

  const handleCardClick = (matchId: number, isGroup: boolean) => {
    const route = isGroup
      ? ROUTES.GROUP_MATES(String(matchId))
      : ROUTES.MATCH_SINGLE(String(matchId));

    navigate(route);
  };

  useEffect(() => {
    if (!gameMatchData) {
      setHeaderTitle('');
      return;
    }

    setHeaderTitle(`${gameMatchData.awayTeam} vs ${gameMatchData.homeTeam}`);

    return () => {
      setHeaderTitle('');
    };
  }, [gameMatchData, setHeaderTitle]);

  return (
    <div className="relative h-full flex-col gap-[1.2rem] px-[1.6rem] pt-[2rem]">
      {gameMatchData?.result?.map((match) => (
        // TODO: 매칭 현황 상태가 [그룹원 모집중]인 카드만 노출
        <button
          key={match.matchId}
          type="button"
          onClick={() => {
            handleCardClick(match.matchId, match.isGroup);
          }}
        >
          <Card
            key={match.matchId}
            id={match.matchId}
            type="game"
            nickname={match.nickname}
            count={match.count}
            imgUrl={match.img}
            awayTeam={gameMatchData.awayTeam}
            homeTeam={gameMatchData.homeTeam}
            stadium={gameMatchData.stadium}
            date={gameMatchData.date}
            matchRate={match.matchRate ?? undefined}
            isGroup={match.isGroup}
            className="cursor-pointer"
          />
        </button>
      ))}

      <button
        type="button"
        aria-label="매칭 생성"
        className="absolute right-[1.6rem] bottom-[2rem] h-[4.8rem] w-[4.8rem] flex-row-center cursor-pointer rounded-full bg-main-900"
        onClick={handleCreateMatchClick}
      >
        <Icon name="plus" color="white" />
      </button>

      <MatchingCtaBottomSheet
        isOpen={isMatchingCtaBottomSheetOpen}
        onClose={() => setIsMatchingCtaBottomSheetOpen(false)}
        date={gameMatchData?.date ?? ''}
        gameSchedule={gameSchedule}
        initialType={TAB_TYPES.SINGLE}
        onSubmit={handleMatchingCtaSubmit}
        showDescription={false}
      />
    </div>
  );
};

export default Game;
