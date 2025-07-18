import { matchQueries } from '@apis/match/match-queries';
import Loading from '@pages/loading/loading';
import MateCarousel from '@pages/match/components/mate-carousel';
import MateFooter from '@pages/match/components/mate-footer';
import MateHeader from '@pages/match/components/mate-header';
import { mapMateData } from '@pages/match/utils/mate';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface MateProps {
  matchId: number;
  onRequestClick: () => void;
  isGroupMatching?: boolean;
}

const Mate = ({ matchId, onRequestClick, isGroupMatching = true }: MateProps) => {
  const { data, isLoading } = useQuery({
    ...matchQueries.MATCH_DETAIL(matchId, false),
    enabled: !!matchId,
  });

  const mates = (data?.mates || []).map(mapMateData);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <Loading />;

  return (
    <div className="h-full flex-col-between">
      <section className="w-full flex-col-center gap-[4rem] pt-[4rem]">
        <MateHeader nickname={data?.nickname ?? ''} isGroupMatching={isGroupMatching} />
        <MateCarousel
          mates={mates}
          currentIndex={currentIndex}
          onDotClick={setCurrentIndex}
          isGroupMatching={isGroupMatching}
        />
      </section>
      <MateFooter isGroupMatching={isGroupMatching} onRequestClick={onRequestClick} />
    </div>
  );
};

export default Mate;
