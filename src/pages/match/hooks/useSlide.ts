import { useRef } from 'react';

interface UseSlideProps {
  length: number;
  currentIndex: number;
  onChange: (index: number) => void;
}

export const useSlide = ({ length, currentIndex, onChange }: UseSlideProps) => {
  const startXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;

    if (diff > 50 && currentIndex < length - 1) onChange(currentIndex + 1);
    else if (diff < -50 && currentIndex > 0) onChange(currentIndex - 1);

    startXRef.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || startXRef.current === null) return;
    const endX = e.clientX;
    const diff = startXRef.current - endX;

    if (diff > 50 && currentIndex < length - 1) onChange(currentIndex + 1);
    else if (diff < -50 && currentIndex > 0) onChange(currentIndex - 1);

    startXRef.current = null;
    isDraggingRef.current = false;
  };

  return {
    handleTouchStart,
    handleTouchEnd,
    handleMouseDown,
    handleMouseUp,
  };
};
