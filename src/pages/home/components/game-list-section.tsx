import { gameQueries } from '@apis/game/game-queries';
import EmptyView from '@components/ui/empty-view';
import type { GameCardItem } from '@pages/game/components/game-card';
import GameCard from '@pages/game/components/game-card';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

interface GameListSectionProps {
  selectedDate: Date;
  onGameClick: (game: GameCardItem) => void;
}

const GameListSection = ({ selectedDate, onGameClick }: GameListSectionProps) => {
  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  const { data: gameSchedule, isLoading: gameLoading } = useQuery({
    ...gameQueries.GAME_LIST(formattedDate),
  });

  const hasGames = !!gameSchedule && gameSchedule.length > 0;

  if (!gameLoading && !hasGames) {
    return (
      <EmptyView
        iconName="empty-2"
        className="mt-[7.2rem] mb-[13rem]"
        text="해당 날짜에는 진행되는 경기가 없어요!"
        subText="경기가 있는 다른 날짜를 탐색해 보세요."
      />
    );
  }

  return (
    <section className="px-[1.6rem]">
      <div className="flex-col gap-[1.2rem]">
        {(gameSchedule ?? []).map((game) => (
          <GameCard key={game.id} game={game} onGameClick={() => onGameClick(game)} />
        ))}
      </div>
    </section>
  );
};

export default GameListSection;
