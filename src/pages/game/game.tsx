import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import Icon from '@components/icon/icon';
import { HAS_DONE_TOAST_MESSAGE } from '@constants/error-toast';
import { ROUTES } from '@routes/routes-config';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
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

  const { data: gameMatchData } = useQuery({
    ...matchQueries.GAME_MATCH_LIST(parsedGameId),
    enabled: Number.isFinite(parsedGameId),
  });

  const hasCreatedMatch = gameMatchData?.result?.some((match) => match.matchRate === null);

  const handleCreateMatchClick = () => {
    if (hasCreatedMatch) {
      showErrorToast(HAS_DONE_TOAST_MESSAGE, { offset: '2.4rem', icon: false });
      return;
    }
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
      {/* TODO: 매칭 생성 바텀시트 연결 */}
      <button
        type="button"
        aria-label="매칭 생성"
        className="absolute right-[1.6rem] bottom-[2rem] h-[4.8rem] w-[4.8rem] flex-row-center cursor-pointer rounded-full bg-main-900"
        onClick={handleCreateMatchClick}
      >
        <Icon name="plus" color="white" />
      </button>
    </div>
  );
};

export default Game;
