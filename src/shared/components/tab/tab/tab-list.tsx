import type { TabStyleKey } from '@components/tab/tab/styles/tab-style';
import { tabStyleMap } from '@components/tab/tab/styles/tab-style';
import BarTabItem from '@components/tab/tab/tab-item';
import { cn } from '@libs/cn';
import { useState } from 'react';

interface BarTabListProps {
  colorMode: TabStyleKey;
}

const BarTabList = ({ colorMode }: BarTabListProps) => {
  const types = ['1:1', '그룹'];
  const [activeType, setActiveType] = useState('1:1');

  const tabStyle = tabStyleMap[colorMode];

  const renderTabContent = () => {
    switch (activeType) {
      case '1:1':
        return <OneToOneTabContent />;
      case '그룹':
        return <GroupTabContent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={cn('flex items-center justify-start', tabStyle.gap)}>
        {types.map((label) => (
          <BarTabItem
            key={label}
            label={label}
            isActive={activeType === label}
            style={tabStyle}
            onClick={() => setActiveType(label)}
          />
        ))}
      </div>

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

const OneToOneTabContent = () => <div>1:1 매칭 탭 콘텐츠입니다</div>;
const GroupTabContent = () => <div>그룹 매칭 탭 콘텐츠입니다</div>;

export default BarTabList;
