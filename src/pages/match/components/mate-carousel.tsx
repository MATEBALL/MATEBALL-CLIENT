import type { DetailedCardProps } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';
import CarouselIndicator from '@pages/match/groups/components/carousel_indicator';
import SlideItem from '@pages/match/groups/components/slide-item';
import { useSlide } from '@pages/match/hooks/useSlide';
import { getSlideTransformStyle } from '@pages/match/styles/get-slide-transformstyle';

interface MateCarouselProps {
  mates: (DetailedCardProps & { id: number })[];
  currentIndex: number;
  onDotClick: (index: number) => void;
  isGroupMatching: boolean;
}

const MateCarousel = ({ mates, currentIndex, onDotClick, isGroupMatching }: MateCarouselProps) => {
  const { handleTouchStart, handleTouchEnd, handleMouseDown } = useSlide({
    length: mates.length,
    currentIndex,
    onChange: onDotClick,
  });

  return (
    <section className="w-full flex-col gap-[1.6rem] overflow-hidden" aria-label="매칭 캐러셀">
      <ul
        className={cn('flex transition-transform duration-300 ease-in-out')}
        style={getSlideTransformStyle(currentIndex)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        aria-roledescription="carousel"
        aria-live="polite"
      >
        {mates.map((mate, index) => (
          <li
            key={mate.id}
            aria-roledescription="slide"
            aria-label={`슬라이드 ${index + 1} / ${mates.length}`}
            aria-hidden={index !== currentIndex}
            className="min-w-full"
          >
            <SlideItem isGroupMatching={isGroupMatching} mate={mate} />
          </li>
        ))}
      </ul>

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
