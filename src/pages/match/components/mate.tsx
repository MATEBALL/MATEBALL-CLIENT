import MateCarousel from '@pages/match/components/mate-carousel';
import MateFooter from '@pages/match/components/mate-footer';
import MateHeader from '@pages/match/components/mate-header';
import useMate from '@pages/match/hooks/useMate';
import { useState } from 'react';

interface MateProps {
  matchId: number;
  onRequestClick: () => void;
  isGroupMatching?: boolean;
}

const Mate = ({ matchId, onRequestClick, isGroupMatching = true }: MateProps) => {
  const { mates } = useMate(matchId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nickname = '두밥비';
  return (
    <div className="h-full flex-col-between overflow-hidden">
      <section className="flex-col-center gap-[4rem] pt-[4rem]">
        <MateHeader nickname={nickname} isGroupMatching={isGroupMatching} />
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
