import FillTabItem from '@components/tab/fill-tab/fill-tab-item';
import { useState } from 'react';

interface TabListProps {
  tabs: string[];
}

const FillTabList = ({ tabs }: TabListProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex gap-[0.8rem]">
      {tabs.map((title) => (
        <FillTabItem
          key={title}
          title={title}
          isActive={activeTab === title}
          onClick={() => setActiveTab(title)}
        />
      ))}
    </div>
  );
};

export default FillTabList;
