import { TAB_TYPES, type TabType } from '@components/tab/tab/constants/tab-type';
import { useState } from 'react';

export const useTabState = () => {
  const [activeType, setActiveType] = useState<TabType>(TAB_TYPES.SINGLE);

  const changeTab = (type: TabType) => {
    setActiveType(type);
  };

  const isOneOnOne = activeType === TAB_TYPES.SINGLE;
  const isGroup = activeType === TAB_TYPES.GROUP;

  return {
    activeType,
    changeTab,
    isOneOnOne,
    isGroup,
    TAB_TYPES,
  };
};
