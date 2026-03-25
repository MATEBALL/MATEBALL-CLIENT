import { gameQueries } from '@apis/game/game-queries';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

interface LayoutOutletContext {
  setHeaderTitle: (title: string) => void;
}

const Game = () => {
  const { date, gameId } = useParams();
  const { setHeaderTitle } = useOutletContext<LayoutOutletContext>();

  const { data: gameSchedule } = useQuery({
    ...gameQueries.GAME_LIST(date ?? ''),
    enabled: !!date,
  });

  useEffect(() => {
    const currentGame = gameSchedule?.find((game) => String(game.id) === gameId);

    if (!currentGame) {
      setHeaderTitle('');
      return;
    }

    setHeaderTitle(`${currentGame.awayTeam} vs ${currentGame.homeTeam}`);

    return () => {
      setHeaderTitle('');
      return;
    };
  }, [gameId, gameSchedule, setHeaderTitle]);

  return (
    <div>
      <div>Game</div>
    </div>
  );
};

export default Game;
