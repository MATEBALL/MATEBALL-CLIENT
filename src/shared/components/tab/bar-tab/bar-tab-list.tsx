import { useState } from 'react';
import BarTabItem from '@components/tab/bar-tab/bar-tab-item';

interface BarTabListProps {
  colorMode: 'home' | 'group';
}

const BarTabList = ({ colorMode }: BarTabListProps) => {
  const types = ['1:1', '그룹'];
  const [activeType, setActiveType] = useState('1:1');

  return (
    <div className="inline-flex justify-start items-center gap-6">
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
