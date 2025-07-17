import type { TabType } from '@components/tab/tab/tab-content';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useMatchTabState = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialTab = (searchParams.get('tab') as TabType) || '1:1';
  const initialFilter = searchParams.get('filter') || '전체';

  const [tabState, setTabState] = useState({ type: initialTab, filter: initialFilter });

  const updateQuery = (type: TabType, filter: string) => {
    const query = new URLSearchParams();
    query.set('tab', type);
    query.set('filter', filter);
    navigate(`${ROUTES.MATCH}?${query.toString()}`, { replace: true });
  };

  const handleTabChange = (type: TabType) => {
    setTabState({ type, filter: '전체' });
    updateQuery(type, '전체');
  };

  const handleFilterChange = (filter: string) => {
    setTabState((prev) => {
      const next = { ...prev, filter };
      updateQuery(next.type, filter);
      return next;
    });
  };

  return { tabState, handleTabChange, handleFilterChange };
};
