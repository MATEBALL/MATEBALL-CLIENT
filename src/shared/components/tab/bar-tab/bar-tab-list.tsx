import BarTabItem from '@components/tab/bar-tab/bar-tab-item';
import type { TabStyleKey } from '@components/tab/bar-tab/styles/bar-tab-style';
import { tabStyleMap } from '@components/tab/bar-tab/styles/bar-tab-style';
import { cn } from '@libs/cn';
import { useState } from 'react';

interface BarTabListProps {
  colorMode: TabStyleKey;
}

const BarTabList = ({ colorMode }: BarTabListProps) => {
  const types = ['1:1', '그룹'];
  const [activeType, setActiveType] = useState('1:1');

  const tabStyle = tabStyleMap[colorMode];

  return (
    <div className={cn('flex items-center justify-start', tabStyle.gap)}>
      {types.map((label) => (
        <BarTabItem
          key={label}
          label={label}
          isActive={activeType === label}
          style={tabStyleMap[colorMode]}
          onClick={() => setActiveType(label)}
        />
      ))}
    </div>
  );
};

export default BarTabList;
