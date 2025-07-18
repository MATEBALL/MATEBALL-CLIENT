import type { TabType } from '@components/tab/tab/tab-content';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useMatchTabState = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isTabType = (value: string | null): value is TabType => {
    return value === '1:1' || value === '그룹';
  };

  const tabParam = searchParams.get('tab');
  const filterParam = searchParams.get('filter');
  const initialTab: TabType = isTabType(tabParam) ? tabParam : '1:1';
  const initialFilter = filterParam || '전체';

  const [tabState, setTabState] = useState({ type: initialTab, filter: initialFilter });

  const updateTabQuery = (type: TabType, filter: string) => {
    const query = new URLSearchParams();
    query.set('tab', type);
    query.set('filter', filter);
    navigate(`${ROUTES.MATCH}?${query.toString()}`, { replace: true });
  };

  const handleTabChange = (type: TabType) => {
    setTabState({ type, filter: '전체' });
    updateTabQuery(type, '전체');
  };

  const handleFilterChange = (filter: string) => {
    setTabState((prev) => {
      const next = { ...prev, filter };
      updateTabQuery(next.type, filter);
      return next;
    });
  };

  return { tabState, handleTabChange, handleFilterChange };
};
