import { dummyMateData } from '@mocks/dummyMateData';
import type { MateInfo } from '@pages/match/groups/types/mate-type';
import { useEffect, useState } from 'react';

export function useMate(matchId: number) {
  const [mate, setMate] = useState<MateInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = dummyMateData.find((m) => m.id === matchId) ?? null;
      setMate(result);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [matchId]);

  return { mate, loading };
}
