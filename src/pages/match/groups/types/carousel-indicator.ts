export interface CarouselIndicatorProps {
  ids: string[];
  currentIndex: number;
  onDotClick?: (index: number) => void;
}
