import { matchQueries } from '@apis/match/match-queries';
import type { ChipColor } from '@components/card/match-card/types/card';
import Loading from '@pages/loading/loading';
import MateCarousel from '@pages/match/components/mate-carousel';
import MateFooter from '@pages/match/components/mate-footer';
import MateHeader from '@pages/match/components/mate-header';
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
  const mates = (data?.mates || []).map((mate) => ({
    ...mate,
    type: 'detailed' as const,
    imgUrl: [mate.imgUrl],
    nickname: mate.nickname,
    chips: [mate.team, mate.style].filter((chip): chip is ChipColor => Boolean(chip)),
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <Loading />;

  return (
    <div className="h-svh flex-col-between overflow-hidden">
      <section className="w-full flex-col-center gap-[4rem] pt-[4rem]">
        <MateHeader
          nickname={mates[currentIndex]?.nickname?.[0] ?? ''}
          isGroupMatching={isGroupMatching}
        />
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
