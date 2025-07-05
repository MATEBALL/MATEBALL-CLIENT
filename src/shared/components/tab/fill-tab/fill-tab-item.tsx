import { cn } from '@libs/cn';
import type { FC } from 'react';

interface FillTabItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const FillTabItem: FC<FillTabItemProps> = ({ title, isActive, onClick }) => (
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

export default FillTabItem;
