import type { TabStyleKey } from '@components/tab/tab/styles/tab-style';
import { tabStyleMap } from '@components/tab/tab/styles/tab-style';
import TabContent, { type TabType } from '@components/tab/tab/tab-content';
import TabItem from '@components/tab/tab/tab-item';
import { cn } from '@libs/cn';
import { useState } from 'react';

interface TabListProps {
  colorMode: TabStyleKey;
}

const TabList = ({ colorMode }: TabListProps) => {
  const types: TabType[] = ['1:1', '그룹'];
  const [activeType, setActiveType] = useState<TabType>('1:1');

  const tabStyle = tabStyleMap[colorMode];

  return (
    <div>
      <div className={cn('flex items-center justify-start', tabStyle.gap)}>
        {types.map((label) => (
          <TabItem
            key={label}
            label={label}
            isActive={activeType === label}
            style={tabStyle}
            onClick={() => setActiveType(label)}
          />
        ))}
      </div>

      <div className="mt-4">
        <TabContent activeType={activeType} />
      </div>
    </div>
  );
};

export default TabList;
