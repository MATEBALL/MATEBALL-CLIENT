import MateCarousel from '@pages/match/components/mate-carousel';
import MateFooter from '@pages/match/components/mate-footer';
import MateHeader from '@pages/match/components/mate-header';
import type { MateProps } from '@pages/match/groups/types/mate-type';
import { useMate } from '@pages/match/hooks/useMate';
import { useState } from 'react';

const Mate = ({ matchId, onRequestClick, isGroupMatching = true }: MateProps) => {
  const { mates } = useMate(matchId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nickname = '두밥비';
  return (
    <div className="relative max-h-screen flex-col-center items-center gap-[4rem] pt-[4rem]">
      <MateHeader nickname={nickname} isGroupMatching={isGroupMatching} />
      <MateCarousel
        mates={mates}
        currentIndex={currentIndex}
        onDotClick={setCurrentIndex}
        isGroupMatching={isGroupMatching}
      />
      <MateFooter isGroupMatching={isGroupMatching} onRequestClick={onRequestClick} />
    </div>
  );
};

export default Mate;
