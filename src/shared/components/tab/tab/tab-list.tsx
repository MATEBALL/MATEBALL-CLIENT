import { TAB_TYPES } from '@components/tab/tab/constants/tab-type';
import type { TabStyleKey } from '@components/tab/tab/styles/tab-style';
import { tabStyleMap } from '@components/tab/tab/styles/tab-style';
import TabContent, { type TabType } from '@components/tab/tab/tab-content';
import TabItem from '@components/tab/tab/tab-item';
import { cn } from '@libs/cn';
import { useState } from 'react';

interface TabListProps {
  colorMode: TabStyleKey;
  contentMap: Record<TabType, React.ReactNode>;
}

const TabList = ({ colorMode, contentMap }: TabListProps) => {
  const types: TabType[] = [TAB_TYPES.SINGLE, TAB_TYPES.GROUP];
  const [activeType, setActiveType] = useState<TabType>(TAB_TYPES.SINGLE);

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
        <TabContent activeType={activeType} contentMap={contentMap} />
      </div>
    </div>
  );
};

export default TabList;
