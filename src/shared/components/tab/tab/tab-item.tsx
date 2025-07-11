import type { TabStyleValue } from '@components/tab/tab/styles/tab-style';
import { cn } from '@libs/cn';

interface BarTabItemProps {
  label: string;
  isActive: boolean;
  style: TabStyleValue;
  onClick?: () => void;
}

const BarTabItem = ({ label, isActive, style, onClick }: BarTabItemProps) => {
  return (
    <button
      type="button"
      data-active={isActive}
      onClick={onClick}
      className={cn(
        isActive ? style.borderActive : style.borderInactive,
        style.size,
        style.borderThickness,
        'flex-row-center cursor-pointer whitespace-nowrap py-[0.6rem]',
      )}
    >
      <span
        className={cn(
          style.typography,
          'text-center',
          isActive ? style.textActive : style.textInactive,
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default BarTabItem;
