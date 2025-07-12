import FillTabItem from '@components/tab/fill-tab/fill-tab-item';
import { useState } from 'react';

interface FillTabListProps {
  tabs: string[];
  onChange?: (tab: string) => void;
}

const FillTabList = ({ tabs, onChange }: FillTabListProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div className="flex gap-[0.8rem]">
      {tabs.map((title) => (
        <FillTabItem
          key={title}
          title={title}
          isActive={activeTab === title}
          onClick={() => handleTabClick(title)}
        />
      ))}
    </div>
  );
};

export default FillTabList;
