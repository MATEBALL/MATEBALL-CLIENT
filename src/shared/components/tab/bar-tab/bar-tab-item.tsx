import { cn } from '@libs/cn';
import type { FC } from 'react';

// 홈탭 vs 그룹탭 기준
type TabColorMode = 'home' | 'group';

interface BarTabItemProps {
  label: string;
  isActive: boolean;
  colorMode: TabColorMode;
  onClick?: () => void;
}

const BarTabItem: FC<BarTabItemProps> = ({ label, isActive, colorMode, onClick }) => {
  const textColorClass = (() => {
    if (isActive) {
      return colorMode === 'home' ? 'text-gray-white' : 'text-gray-black';
    } else {
      return colorMode === 'home' ? 'text-gray-500' : 'text-gray-600';
    }
  })();

  const borderColorClass = (() => {
    if (isActive) {
      return colorMode === 'home' ? 'border-gray-white' : 'border-gray-black';
    } else {
      return 'border-transparent';
    }
  })();


  return (
    <button
      type="button"
      data-active={isActive}
      onClick={onClick}
      className={cn(
        'w-12 border-b-2',
        borderColorClass,
        'inline-flex flex-col justify-start items-center gap-1 cursor-pointer',
      )}
    >
      <span
        className={cn(
          'text-xl font-semibold leading-loose font-[Pretendard] text-center justify-start',
          textColorClass,
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default BarTabItem;
