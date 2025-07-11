import { cn } from '@libs/cn';
import type { CarouselIndicatorProps } from '@pages/match/groups/types/carousel-indicator';

const CarouselIndicator = ({ ids, currentIndex, onDotClick }: CarouselIndicatorProps) => {
  return (
    <div className="flex-row-center gap-[0.8rem]">
      {ids.map((id, index) => {
        const isActive = currentIndex === index;
        const dotColorClass = isActive ? 'bg-main-900' : 'bg-gray-400';

        return (
          <button
            key={id}
            type="button"
            aria-label={`슬라이드 ${index + 1}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={() => onDotClick?.(index)}
            className={cn(
              'size-[0.8rem] rounded-full transition-all duration-200',
              dotColorClass,
            )}
          />
        );
      })}
    </div>
  );
};

export default CarouselIndicator;
