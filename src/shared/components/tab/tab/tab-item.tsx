import type { TabStyleValue } from '@components/tab/tab/styles/tab-style';
import { cn } from '@libs/cn';

interface TabItemProps {
  label: string;
  isActive: boolean;
  style: TabStyleValue;
  onClick?: () => void;
}

const TabItem = ({ label, isActive, style, onClick }: TabItemProps) => {
  return (
    <button
      type="button"
      data-active={isActive}
      onClick={onClick}
      className={cn(
        isActive ? style.borderActive : style.borderInactive,
        style.size,
        style.borderStyle,
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

export default TabItem;
