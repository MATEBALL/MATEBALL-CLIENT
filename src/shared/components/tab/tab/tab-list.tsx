<<<<<<< HEAD
import { TAB_TYPES } from '@components/tab/tab/constants/tab-type';
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
  const types: TabType[] = [TAB_TYPES.SINGLE, TAB_TYPES.GROUP];
  const [activeType, setActiveType] = useState<TabType>(TAB_TYPES.SINGLE);

  const tabStyle = tabStyleMap[colorMode];

=======
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
  const types: TabType[] = ['1:1', '그룹'];
  const tabStyle = tabStyleMap[colorMode];

<<<<<<< HEAD
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

>>>>>>> ce4c8b9 (feat: tab 공통 컴포넌트 구현)
  return (
    <div>
      <div className={cn('flex items-center justify-start', tabStyle.gap)}>
        {types.map((label) => (
<<<<<<< HEAD
          <TabItem
=======
          <BarTabItem
>>>>>>> ce4c8b9 (feat: tab 공통 컴포넌트 구현)
            key={label}
            label={label}
            isActive={activeType === label}
            style={tabStyle}
            onClick={() => setActiveType(label)}
          />
        ))}
      </div>

<<<<<<< HEAD
      <div className="mt-4">
        <TabContent activeType={activeType} />
      </div>
=======
      <div className="mt-4">{renderTabContent()}</div>
>>>>>>> ce4c8b9 (feat: tab 공통 컴포넌트 구현)
=======
  return (
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
>>>>>>> 0e4f982 (feat: tab 반영, usetab 훅 작성(#83))
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default TabList;
=======
const OneToOneTabContent = () => <div>1:1 매칭 탭 콘텐츠입니다</div>;
const GroupTabContent = () => <div>그룹 매칭 탭 콘텐츠입니다</div>;

export default BarTabList;
>>>>>>> ce4c8b9 (feat: tab 공통 컴포넌트 구현)
=======
export default TabList;
>>>>>>> 0e4f982 (feat: tab 반영, usetab 훅 작성(#83))
