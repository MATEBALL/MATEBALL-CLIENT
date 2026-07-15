import { matchQueries } from '@apis/match/match-queries';
import { userQueries } from '@apis/user/user-queries';
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
    ...matchQueries.MATCH_MEMBERS_DETAIL(parsedMatchId),
    enabled: Number.isFinite(parsedMatchId),
  });
  const { data: user } = useQuery(userQueries.USER_INFO());
  const myNickname = user?.nickname;

  const mates = useMemo(() => {
    return (data?.results ?? []).filter((mate) => mate.nickname !== myNickname).map(mapMateData);
  }, [data, myNickname]);

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
