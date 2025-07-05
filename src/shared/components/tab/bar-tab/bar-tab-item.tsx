import { cn } from '@libs/cn';
import type { FC } from 'react';
import type { TabColorMode } from '@styles/bar-tab.styles';
import {
  getTextColorClass,
  getBorderColorClass,
  getHeightClass,
  getTypographyClass,
} from '@styles/bar-tab.styles';

interface BarTabItemProps {
  label: string;
  isActive: boolean;
  colorMode: TabColorMode;
  onClick?: () => void;
}

const BarTabItem: FC<BarTabItemProps> = ({ label, isActive, colorMode, onClick }) => {
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
};

export default BarTabItem;
