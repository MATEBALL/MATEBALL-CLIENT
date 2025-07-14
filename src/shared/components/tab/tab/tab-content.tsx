import type { ReactNode } from 'react';

export type TabType = '1:1' | '그룹';

export interface TabContentProps {
  activeType: TabType;
  contentMap: Record<TabType, ReactNode>;
}

const TabContent = ({ activeType, contentMap }: TabContentProps) => {
  return <>{contentMap[activeType]}</>;
};

export default TabContent;
