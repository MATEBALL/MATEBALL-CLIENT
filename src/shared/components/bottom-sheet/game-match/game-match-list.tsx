import GameMatchItem from '@components/bottom-sheet/game-match/game-match-item';
import type { GameScheduleItem } from '@components/bottom-sheet/game-match/types/game-type';

interface GameMatchListProps {
  selectedIdx: number;
  onSelect: (idx: number) => void;
  matches: GameScheduleItem[];
}

const GameMatchList = ({ selectedIdx, onSelect, matches }: GameMatchListProps) => {
  return (
    <div className="w-full flex-col gap-[0.8rem]">
      {matches.map((match, idx) => (
        <GameMatchItem
          key={match.id}
          isSelected={idx === selectedIdx}
          away={match.awayTeam}
          home={match.homeTeam}
          time={match.gameTime}
          stadium={match.stadium}
          onClick={() => onSelect(idx)}
        />
      ))}
    </div>
  );
};

export default GameMatchList;
