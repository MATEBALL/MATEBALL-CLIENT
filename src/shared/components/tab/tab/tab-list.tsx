import type { TabType } from '@components/tab/tab/constants/tab-type';
import { TAB_TYPES } from '@components/tab/tab/constants/tab-type';
import type { TabStyleKey } from '@components/tab/tab/styles/tab-style';
import { tabStyleMap } from '@components/tab/tab/styles/tab-style';
import TabItem from '@components/tab/tab/tab-item';
import { cn } from '@libs/cn';
import type { ReactNode } from 'react';

interface TabListProps {
  colorMode: TabStyleKey;
  activeType: TabType;
  className?: string;
  onTabChange: (type: TabType) => void;
  contentMap?: Partial<Record<TabType, ReactNode>>;
}

const TabList = ({ colorMode, activeType, onTabChange, contentMap, className }: TabListProps) => {
  const types: TabType[] = [TAB_TYPES.SINGLE, TAB_TYPES.GROUP];
  const tabStyle = tabStyleMap[colorMode];

  return (
    <>
      <ul className={cn('flex items-center justify-start', tabStyle.gap, className)}>
        {types.map((label) => (
          <TabItem
            key={label}
            label={label}
            isActive={activeType === label}
            style={tabStyle}
            onClick={() => onTabChange(label)}
          />
        ))}
      </ul>
      {contentMap?.[activeType]}
    </>
  );
};

export default TabList;
