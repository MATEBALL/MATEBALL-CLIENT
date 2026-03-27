import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import Icon from '@components/icon/icon';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

interface LayoutOutletContext {
  setHeaderTitle: (title: string) => void;
}

const Game = () => {
  const { gameId } = useParams();
  const { setHeaderTitle } = useOutletContext<LayoutOutletContext>();

  const { data: gameMatchData } = useQuery({
    ...matchQueries.GAME_MATCH_LIST(Number(gameId)),
    enabled: !!gameId,
  });

  useEffect(() => {
    if (!gameMatchData) {
      setHeaderTitle('');
      return;
    }

    setHeaderTitle(`${gameMatchData.awayTeam} vs ${gameMatchData.homeTeam}`);

    return () => {
      setHeaderTitle('');
      return;
    };
  }, [gameMatchData, setHeaderTitle]);

  return (
    <div className="relative h-full flex-col gap-[1.2rem] px-[1.6rem] pt-[2rem]">
      {gameMatchData?.result.map((match) => (
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
        />
      ))}
      {/* TODO: 플로팅버튼 모달 연결 */}
      <div className="absolute right-[1.6rem] bottom-[2rem] h-[4.8rem] w-[4.8rem] flex-row-center cursor-pointer rounded-full bg-main-900">
        <Icon name="plus" color="white" />
      </div>
    </div>
  );
};

export default Game;
