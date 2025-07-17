import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';

interface GameMatchItemProps {
  isSelected?: boolean;
  away: string;
  home: string;
  time: string;
  stadium: string;
  onClick?: () => void;
}

const GameMatchItem = ({ isSelected, away, home, time, stadium, onClick }: GameMatchItemProps) => {
  const stateClass = isSelected ? 'game-match-selected' : 'game-match-default';

  return (
    <button
      type="button"
      className={cn('game-match-item', stateClass)}
      data-property={isSelected ? 'selected' : 'default'}
      onClick={onClick}
    >
      <div className="body_16_m flex-row gap-[0.4rem] text-gray-black">
        <span>{away}</span>
        <span>vs</span>
        <span>{home}</span>
      </div>

      <div className="w-[20rem] flex-row gap-[0.8rem]">
        <div className="flex-row-center gap-[0.4rem]">
          <Icon name="clock" className="text-gray-500" size={1.6} />
          <span className="body_16_m text-gray-600">{time}</span>
        </div>

        <div className="flex-row-center gap-[0.4rem] text-gray-600">
          <Icon name="location" className="text-gray-500" size={1.6} />
          <span className="body_16_m text-gray-600">{stadium}</span>
        </div>
      </div>
    </button>
  );
};

export default GameMatchItem;
