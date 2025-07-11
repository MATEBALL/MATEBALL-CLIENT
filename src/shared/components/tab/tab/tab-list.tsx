import { TAB_TYPES } from '@components/tab/tab/constants/tab-type';
import type { TabStyleKey } from '@components/tab/tab/styles/tab-style';
import { tabStyleMap } from '@components/tab/tab/styles/tab-style';
import TabItem from '@components/tab/tab/tab-item';
import type { TabType } from '@hooks/use-tab-state';
import { cn } from '@libs/cn';

interface TabListProps {
  colorMode: TabStyleKey;
  activeType: TabType;
  onTabChange: (type: TabType) => void;
}

const TabList = ({ colorMode, activeType, onTabChange }: TabListProps) => {
  const types: TabType[] = [TAB_TYPES.SINGLE, TAB_TYPES.GROUP];

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
            onClick={() => onTabChange(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;
