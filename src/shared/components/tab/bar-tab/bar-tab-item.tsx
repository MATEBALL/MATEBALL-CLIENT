import type { TabColorMode } from '@components/tab/bar-tab/styles/bar-tab';
import {
  getBorderColorClass,
  getHeightClass,
  getTextColorClass,
  getTypographyClass,
} from '@components/tab/bar-tab/styles/bar-tab';
import { cn } from '@libs/cn';

interface BarTabItemProps {
  label: string;
  isActive: boolean;
  colorMode: TabColorMode;
  onClick?: () => void;
}

const BarTabItem = ({ label, isActive, colorMode, onClick }: BarTabItemProps) => {
  return (
    <button
      type="button"
      data-active={isActive}
      onClick={onClick}
      className={cn(
        'w-[4.8rem] border-b-[2px]',
        getBorderColorClass(isActive, colorMode),
        getHeightClass(colorMode),
        'flex-row-center cursor-pointer whitespace-nowrap py-[0.6rem]',
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
};

export default BarTabItem;
