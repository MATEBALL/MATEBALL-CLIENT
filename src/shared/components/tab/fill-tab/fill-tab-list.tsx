import FillTabItem from '@components/tab/fill-tab/fill-tab-item';
import { cn } from '@libs/cn';
import { useState } from 'react';

interface FillTabListProps {
  tabs: string[];
  onChange?: (tab: string) => void;
  className?: string;
}

const FillTabList = ({ tabs, onChange, className }: FillTabListProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <ul className={cn('flex gap-[0.8rem]', className)}>
      {tabs.map((title) => (
        <FillTabItem
          key={title}
          title={title}
          isActive={activeTab === title}
          onClick={() => handleTabClick(title)}
        />
      ))}
    </ul>
  );
};

export default FillTabList;
