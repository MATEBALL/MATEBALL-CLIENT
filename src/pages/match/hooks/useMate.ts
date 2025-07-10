import { dummyMateData } from '@mocks/dummyMateData';
import type { MateInfo } from '@pages/match/groups/types/mate-type';
import { useEffect, useState } from 'react';

export function useMate(matchId: number) {
  const [mates, setMates] = useState<MateInfo[]>([]);
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
