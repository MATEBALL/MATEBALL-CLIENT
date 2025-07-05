import { useState } from 'react';
import TabItem from '@components/tab/fill-tab/tab-item';

interface TabListProps {
  tabs: string[];
}

const TabList = ({ tabs }: TabListProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex gap-[0.8rem]">
      {tabs.map((title) => (
        <TabItem
          key={title}
          title={title}
          isActive={activeTab === title}
          onClick={() => setActiveTab(title)}
        />
      ))}
    </div>
  );
};

export default TabList;
