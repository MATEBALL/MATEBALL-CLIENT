import { cn } from '@libs/cn';
import type { CarouselIndicatorProps } from '@pages/match/groups/types/carousel-indicator';

const CarouselIndicator = ({ ids, currentIndex, onDotClick }: CarouselIndicatorProps) => {
  return (
    <div className="mt-[1.2rem] flex items-center justify-center gap-[0.8rem]">
      {ids.map((id, index) => (
        <button
          key={id}
          type="button"
          aria-label={`슬라이드 ${index + 1}`}
          aria-current={currentIndex === index ? 'true' : undefined}
          onClick={() => onDotClick?.(index)}
          className={cn(
            'h-[0.8rem] w-[0.8rem] rounded-full transition-all duration-200',
            currentIndex === index ? 'bg-main-900' : 'bg-gray-300',
          )}
        />
      ))}
    </div>
  );
};

export default CarouselIndicator;
