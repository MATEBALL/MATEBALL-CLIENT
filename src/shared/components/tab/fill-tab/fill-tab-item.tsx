import { cn } from '@libs/cn';

interface FillTabItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function FillTabItem({ title, isActive, onClick }: FillTabItemProps) {
  return (
    <button
      type="button"
      data-state={isActive ? 'active' : 'inactive'}
      onClick={onClick}
      className={cn(
        'px-[0.8rem] py-[0.6rem] rounded-[8px] flex justify-center items-center',
        isActive ? 'bg-main-900' : 'bg-gray-300 cursor-pointer',
      )}
    >
      <span
        className={cn(
          'text-sm font-medium text-center justify-start',
          isActive ? 'text-gray-white' : 'text-gray-800',
        )}
      >
        {title}
      </span>
    </button>
  );
}

export default FillTabItem;
