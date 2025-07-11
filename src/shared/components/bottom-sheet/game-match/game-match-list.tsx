import GameMatchItem from '@components/bottom-sheet/game-match/game-match-item';
import { mockGameDatas } from '@mocks/mockGameData';
import type { GameMatchListProps } from '@components/bottom-sheet/game-match/types/game-type';

const GameMatchList = ({ selectedIdx, onSelect }: GameMatchListProps) => {
  return (
    <div className="w-full flex-col-center gap-[0.8rem]">
      {mockGameDatas.map((match, idx) => (
        <GameMatchItem
          key={idx}
          isSelected={idx === selectedIdx}
          {...match}
          onClick={() => onSelect(idx)}
        />
      ))}
    </div>
  );
};

export default GameMatchList;
