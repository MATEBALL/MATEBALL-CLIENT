import type { DetailedCardProps } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';
import CarouselIndicator from '@pages/match/groups/components/carousel_indicator';
import SlideItem from '@pages/match/groups/components/slide-item';
import { useSlide } from '@pages/match/hooks/useSlide';

interface MateCarouselProps {
  mates: (DetailedCardProps & { id: number })[];
  currentIndex: number;
  onDotClick: (index: number) => void;
  isGroupMatching: boolean;
}

const MateCarousel = ({ mates, currentIndex, onDotClick, isGroupMatching }: MateCarouselProps) => {
  const { handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp } = useSlide({
    length: mates.length,
    currentIndex,
    onChange: onDotClick,
  });

  return (
    <section className="w-full flex-col gap-[1.6rem] overflow-hidden">
      <div
        className={cn('flex transition-transform duration-300 ease-in-out')}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {mates.map((mate) => (
          <SlideItem isGroupMatching={isGroupMatching} key={mate.id} mate={mate} />
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
};

export default MateCarousel;
