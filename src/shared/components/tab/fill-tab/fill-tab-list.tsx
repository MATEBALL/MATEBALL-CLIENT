import FillTabItem from '@components/tab/fill-tab/fill-tab-item';
import { cn } from '@libs/cn';

interface FillTabListProps {
  tabs: string[];
  selected?: string;
  onChange?: (tab: string) => void;
  className?: string;
}

const FillTabList = ({ tabs, selected, onChange, className }: FillTabListProps) => {
  return (
    <ul className={cn('flex gap-[0.8rem]', className)}>
      {tabs.map((title) => (
        <FillTabItem
          key={title}
          title={title}
          isActive={selected === title}
          onClick={() => onChange?.(title)}
        />
      ))}
    </ul>
  );
};

export default FillTabList;
