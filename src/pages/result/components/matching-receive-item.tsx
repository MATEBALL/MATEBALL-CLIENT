import type { DetailedCardProps } from '@components/card/match-card/types/card';
import SlideItem from '@pages/match/groups/components/slide-item';

interface MateItem extends DetailedCardProps {
  id: number;
}

interface MatchingReceiveItemProps {
  mate: MateItem;
  isGroupMatching: boolean;
}

const MatchingReceiveItem = ({ mate, isGroupMatching }: MatchingReceiveItemProps) => {
  return (
    <section className="w-full" aria-label="매칭 후보 카드">
      <SlideItem isGroupMatching={isGroupMatching} mate={mate} />
    </section>
  );
};

export default MatchingReceiveItem;
