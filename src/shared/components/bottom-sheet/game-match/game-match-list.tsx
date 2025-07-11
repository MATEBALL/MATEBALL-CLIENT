import GameMatchItem from './game-match-item';

interface GameMatchListProps {
  selectedIdx: number;
  onSelect: (index: number) => void;
}

const matches = [
  { away: '어웨이', home: '홈', time: 'NN:NN', stadium: '경기장' },
  { away: '어웨이', home: '홈', time: 'NN:NN', stadium: '경기장' },
  { away: '어웨이', home: '홈', time: 'NN:NN', stadium: '경기장' },
  { away: '어웨이', home: '홈', time: 'NN:NN', stadium: '경기장' },
  { away: '어웨이', home: '홈', time: 'NN:NN', stadium: '경기장' },
];

const GameMatchList = ({ selectedIdx, onSelect }: GameMatchListProps) => {
  return (
    <div className="w-full flex-col-center gap-[0.8rem]">
      {matches.map((match, idx) => (
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
