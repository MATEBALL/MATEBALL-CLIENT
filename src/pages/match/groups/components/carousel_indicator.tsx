import { cn } from '@libs/cn';
import type { CarouselIndicatorProps } from '@pages/match/groups/types/carousel-indicator';

const CarouselIndicator = ({ ids, currentIndex, onDotClick }: CarouselIndicatorProps) => {
  return (
    <div className="flex-row-center gap-[0.8rem]">
      {ids.map((id, index) => (
        <button
          key={id}
          type="button"
          aria-label={`슬라이드 ${index + 1}`}
          aria-current={currentIndex === index ? 'true' : undefined}
          onClick={() => onDotClick?.(index)}
          className={cn(
            'size-[0.8rem] rounded-full transition-all duration-200',
            currentIndex === index ? 'bg-main-900' : 'bg-gray-400',
          )}
        />
      ))}
    </div>
  );
};

export default CarouselIndicator;
