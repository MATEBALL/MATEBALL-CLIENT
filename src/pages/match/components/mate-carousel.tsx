import Card from '@components/card/match-card/card';
import type { DetailedCardProps } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';
import CarouselIndicator from '@pages/match/groups/components/carousel_indicator';

interface MateCarouselProps {
  mates: (DetailedCardProps & { id: number })[];
  currentIndex: number;
  onDotClick: (index: number) => void;
  isGroupMatching: boolean;
}

const MateCarousel = ({ mates, currentIndex, onDotClick, isGroupMatching }: MateCarouselProps) => (
  <section className="w-full flex-col gap-[1.6rem] overflow-hidden">
    <div
      className={cn('flex transition-transform duration-300 ease-in-out')}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {mates.map((mate) => (
        <div key={mate.id} className="box-border min-w-full flex-row-center px-[1.6rem]">
          <Card className="w-full" {...mate} type="detailed" />
        </div>
      ))}
    </div>

    {isGroupMatching && (
      <div className="flex-row-center">
        <CarouselIndicator
          ids={mates.map((mate) => `mate-${mate.id}`)}
          currentIndex={currentIndex}
          onDotClick={onDotClick}
        />
      </div>
    )}
  </section>
);

export default MateCarousel;
