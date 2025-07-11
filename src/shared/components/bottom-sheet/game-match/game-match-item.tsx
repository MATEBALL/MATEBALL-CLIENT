import type { GameMatchItemProps } from '@components/bottom-sheet/game-match/types/game-type';
import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';

const GameMatchItem = ({ isSelected, away, home, time, stadium, onClick }: GameMatchItemProps) => {
  return (
    <button
      type="button"
      className={cn(
        'w-full flex-row-between cursor-pointer rounded-[12px] px-[2rem] py-[1.2rem] outline-1 outline-solid outline-offset-[-1px]',
        isSelected ? 'bg-main-200 outline-main-900' : 'bg-gray-white outline-gray-300',
      )}
      data-property={isSelected ? 'selected' : 'default'}
      onClick={onClick}
    >
      <div className="body_16_m flex-row gap-1 text-gray-black">
        <span>{away}</span>
        <span>VS</span>
        <span>{home}</span>
      </div>

      <div className="flex-row gap-2">
        <div className="flex-row-center gap-[0.4rem]">
          <Icon name="ic-clock" className="text-gray-500" size={1.6} />
          <span className="body_16_m text-gray-600">{time}</span>
        </div>

        <div className="flex-row-center gap-[0.4rem] text-gray-600">
          <Icon name="ic-baseball" size={1.6} />
          <span className="body_16_m text-gray-600">{stadium}</span>
        </div>
      </div>
    </button>
  );
};

export default GameMatchItem;
