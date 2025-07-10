import { useState } from 'react';

export type TabType = '1:1' | '그룹';

export const useTabState = () => {
  const [activeType, setActiveType] = useState<TabType>('1:1');

  const changeTab = (type: TabType) => {
    setActiveType(type);
  };

  const isOneOnOne = activeType === '1:1';
  const isGroup = activeType === '그룹';

  return {
    activeType,
    changeTab,
    isOneOnOne,
    isGroup,
  };
};
