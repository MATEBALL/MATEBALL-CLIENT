import { useState } from 'react';
import TabItem from '@components/tab/tab-item';

const tabTitles = ['전체', '대기 중', '완료', '실패'];

const TabList = () => {
  const [activeTab, setActiveTab] = useState(tabTitles[0]);

  return (
    <div className="flex gap-[0.8rem]">
      {tabTitles.map((title) => (
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
