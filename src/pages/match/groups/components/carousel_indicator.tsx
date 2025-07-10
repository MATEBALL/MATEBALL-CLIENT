import { cn } from '@libs/cn';

interface CarouselIndicatorProps {
  total: number; // 전체 슬라이드 수
  currentIndex: number; // 현재 인덱스
  onDotClick?: (index: number) => void;
}

const CarouselIndicator = ({ total, currentIndex, onDotClick }: CarouselIndicatorProps) => {
  return (
    <div className="flex justify-center items-center gap-[0.8rem] mt-[1.2rem]">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          aria-label={`슬라이드 ${index + 1}`}
          onClick={() => onDotClick?.(index)}
          className={cn(
            'w-[0.8rem] h-[0.8rem] rounded-full transition-all duration-200',
            currentIndex === index ? 'bg-main-900' : 'bg-gray-300'
          )}
        />
      ))}
    </div>
  );
};

export default CarouselIndicator;
