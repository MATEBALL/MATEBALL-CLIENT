import { mockMatchData } from '@mocks/mockMatchData';
import type { DetailedCardProps } from '@components/card/match-card/types/card';
import { useEffect, useState } from 'react';

export interface MateCardData extends DetailedCardProps {
  id: number;
  matchId: number;
}

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
