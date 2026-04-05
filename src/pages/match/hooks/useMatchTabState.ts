import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MATCH_TAB_TYPES, type MatchTabType } from '../constants/matching';

const isMatchTabType = (value: string | null): value is MatchTabType =>
  value === MATCH_TAB_TYPES.CREATED || value === MATCH_TAB_TYPES.REQUESTED;

export const useMatchTabState = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get('tab');
  const initialTab: MatchTabType = isMatchTabType(tabParam) ? tabParam : MATCH_TAB_TYPES.CREATED;

  const [activeTab, setActiveTab] = useState<MatchTabType>(initialTab);

  const handleTabChange = (tab: MatchTabType) => {
    setActiveTab(tab);
    setSearchParams({ tab }, { replace: true });
  };

  const isCreatedTab = activeTab === MATCH_TAB_TYPES.CREATED;

  return { activeTab, handleTabChange, isCreatedTab };
};
