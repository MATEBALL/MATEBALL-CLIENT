import Card from '@components/card/match-card/card';
import type { DetailedCardProps } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';

interface MateProps extends DetailedCardProps {
  id: number;
}
interface SlideItemProps {
  mate: MateProps;
  isGroupMatching: boolean;
}

const SlideItem = ({ mate, isGroupMatching }: SlideItemProps) => (
  <div
    className={cn(
      'box-border min-w-full flex-row-center px-[1.6rem]',
      !isGroupMatching && 'pb-[1.6rem]',
    )}
  >
    <Card className="w-full" {...mate} type="detailed" />
  </div>
);

export default SlideItem;
