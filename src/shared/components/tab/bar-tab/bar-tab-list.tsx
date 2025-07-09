import BarTabItem from '@components/tab/bar-tab/bar-tab-item';
import { cn } from '@libs/cn';
import { useState } from 'react';
import { getTabGapClass } from './styles/bar-tab';

interface BarTabListProps {
  colorMode: 'home' | 'group';
}

const BarTabList = ({ colorMode }: BarTabListProps) => {
  const types = ['1:1', '그룹'];
  const [activeType, setActiveType] = useState('1:1');

  return (
    <div className={cn('flex items-center justify-start', getTabGapClass(colorMode))}>
      {types.map((label) => (
        <BarTabItem
          key={label}
          label={label}
          isActive={activeType === label}
          colorMode={colorMode}
          onClick={() => setActiveType(label)}
        />
      ))}
    </div>
  );
};

export default BarTabList;
