import { cn } from '@libs/cn';

interface FillTabItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const FillTabItem = ({ title, isActive, onClick }: FillTabItemProps) => {
  return (
    <button
      type="button"
      data-state={isActive ? 'active' : 'inactive'}
      onClick={onClick}
      className={cn(
        'flex-row-center rounded-[8px] px-[1.2rem] py-[0.6rem]',
        isActive ? 'bg-main-900' : 'cursor-pointer bg-gray-250',
      )}
    >
      <span
        className={cn('cap_14_m flex-row-center', isActive ? 'text-gray-white' : 'text-gray-800')}
      >
        {title}
      </span>
    </button>
  );
};

export default FillTabItem;
