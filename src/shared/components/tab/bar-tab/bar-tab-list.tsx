import { useState } from 'react';
import BarTabItem from '@components/tab/bar-tab/bar-tab-item';
import { cn } from '@libs/cn';

interface BarTabListProps {
  colorMode: 'home' | 'group';
}

const BarTabList = ({ colorMode }: BarTabListProps) => {
  const types = ['1:1', '그룹'];
  const [activeType, setActiveType] = useState('1:1');

  const gapClass = colorMode === 'group' ? 'gap-[0.8rem]' : 'gap-[2.4rem]';

  return (
    <div className={cn('flex justify-start items-center', gapClass)}>
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
