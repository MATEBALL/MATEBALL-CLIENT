import { mockMatchData } from '@mocks/mockMatchData';
import type { MateCardData } from '@pages/match/groups/types/mate-type';
import { useEffect, useState } from 'react';

const useMate = (matchId: number) => {
  const [mates, setMates] = useState<MateCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = mockMatchData.filter((m) => m.matchId === matchId);
      setMates(result);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [matchId]);

  return { mates, loading };
};

export default useMate;
