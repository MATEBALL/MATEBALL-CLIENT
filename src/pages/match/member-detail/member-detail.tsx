import { matchQueries } from '@apis/match/match-queries';
import MateCarousel from '@pages/match/components/mate-carousel';
import { mapMateData } from '@pages/match/utils/mate';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

const MemberDetail = () => {
  const { matchId, memberId } = useParams();

  const parsedMatchId = Number(matchId);
  const parsedMemberId = Number(memberId);

  const { data } = useQuery({
    ...matchQueries.MATCH_MEMBERS(parsedMatchId),
    enabled: Number.isFinite(parsedMatchId),
  });

  const mates = useMemo(() => {
    return (data?.results ?? []).map(mapMateData);
  }, [data]);

  const initialIndex = useMemo(() => {
    if (!Number.isFinite(parsedMemberId)) return 0;

    const foundIndex = mates.findIndex((mate) => mate.id === parsedMemberId);
    return foundIndex >= 0 ? foundIndex : 0;
  }, [mates, parsedMemberId]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  return (
    <div className="h-full flex-row-center bg-gray-white pb-[5.6rem]">
      <MateCarousel
        mates={mates}
        currentIndex={currentIndex}
        onDotClick={setCurrentIndex}
        isGroupMatching={mates.length > 1}
      />
    </div>
  );
};

export default MemberDetail;
