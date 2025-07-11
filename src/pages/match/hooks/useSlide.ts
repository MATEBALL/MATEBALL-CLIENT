import type { UseSlideProps } from '@pages/match/groups/types/carousel-indicator';
import { useRef } from 'react';

export const useSlide = ({ length, currentIndex, onChange }: UseSlideProps) => {
  const startXRef = useRef<number | null>(null);
  const endXRef = useRef<number | null>(null);
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
    e.preventDefault();
    isDraggingRef.current = true;
    startXRef.current = e.clientX;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    endXRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current || startXRef.current === null || endXRef.current === null) return;

    const diff = startXRef.current - endXRef.current;

    if (diff > 50 && currentIndex < length - 1) onChange(currentIndex + 1);
    else if (diff < -50 && currentIndex > 0) onChange(currentIndex - 1);

    startXRef.current = null;
    endXRef.current = null;
    isDraggingRef.current = false;

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return {
    handleTouchStart,
    handleTouchEnd,
    handleMouseDown,
  };
};
