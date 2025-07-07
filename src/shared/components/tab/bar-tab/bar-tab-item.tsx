import { cn } from '@libs/cn';
import type { TabColorMode } from '@components/tab/bar-tab/styles/bar-tab';
import {
  getTextColorClass,
  getBorderColorClass,
  getHeightClass,
  getTypographyClass,
} from '@components/tab/bar-tab/styles/bar-tab';

interface BarTabItemProps {
  label: string;
  isActive: boolean;
  colorMode: TabColorMode;
  onClick?: () => void;
}

function BarTabItem({ label, isActive, colorMode, onClick }: BarTabItemProps) {
  return (
    <button
      type="button"
      data-active={isActive}
      onClick={onClick}
      className={cn(
        'w-[4.8rem] border-b-[0.2rem]',
        getBorderColorClass(isActive, colorMode),
        getHeightClass(colorMode),
        'inline-flex flex-col justify-start items-center cursor-pointer px-[0.6rem] whitespace-nowrap',
      )}
    >
      <span
        className={cn(
          getTypographyClass(colorMode),
          'text-center',
          getTextColorClass(isActive, colorMode),
        )}
      >
        {label}
      </span>
    </button>
  );
}

export default BarTabItem;
