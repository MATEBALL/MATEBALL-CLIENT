import GameMatchItem from '@components/bottom-sheet/game-match/game-match-item';

interface GameScheduleItem {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}

interface GameMatchListProps {
  selectedIdx: number | null;
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
