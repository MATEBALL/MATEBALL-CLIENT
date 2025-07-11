import type { DetailedCardProps } from '@components/card/match-card/types/card';

export interface CarouselIndicatorProps {
  ids: string[];
  currentIndex: number;
  onDotClick?: (index: number) => void;
}

export interface MateCarouselProps {
  mates: (DetailedCardProps & { id: number })[];
  currentIndex: number;
  onDotClick: (index: number) => void;
  isGroupMatching: boolean;
}

export interface UseSlideProps {
  length: number;
  currentIndex: number;
  onChange: (index: number) => void;
}
