import { dummyMateData } from '@mocks/mockMatchData';
import { useEffect, useState } from 'react';
import type { MateCardData } from '@pages/match/groups/types/mate-type';

export function useMate(matchId: number) {
  const [mates, setMates] = useState<MateCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = dummyMateData.filter((m) => m.matchId === matchId);
      setMates(result);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [matchId]);

  return { mates, loading };
}