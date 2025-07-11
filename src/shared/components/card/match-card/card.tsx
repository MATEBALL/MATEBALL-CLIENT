import CardGameInfo from '@components/card/match-card/components/card-game-info';
import CardHeader from '@components/card/match-card/components/card-header';
import CardMatchingRate from '@components/card/match-card/components/card-matching-rate';
import { cardVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProps } from '@components/card/match-card/types/card';
import { getColorType } from '@components/card/match-card/utils/get-color-type';
import { cn } from '@libs/cn';
import clsx from 'clsx';

const Card = (props: CardProps) => {
  const { type, className, color, status } = props;

  const finalColor = getColorType(status, color);

  const introductionClass = 'cap_14_m mt-[1.6rem] mb-[1.6rem]';
  const gameInfoClass = clsx({
    'mt-[0.4rem]': type !== 'detailed',
    'mt-[1.6rem] mb-[1.6rem]': type === 'detailed',
  });

  const dividerClass = cn('border-gray-300', type === 'detailed' && 'mt-[1.6rem]');

  const matchingRateClass = 'mt-[1.6rem] ml-auto';

  return (
    <div className={cn(cardVariants({ type, color: finalColor }), className)}>
      <CardHeader {...props} />

      {type === 'detailed' && <p className={introductionClass}>{props.introduction}</p>}

      <CardGameInfo className={gameInfoClass} {...props} />

      {type === 'detailed' && (
        <>
          <hr className={dividerClass} />
          <CardMatchingRate matchRate={props.matchRate} className={matchingRateClass} />
        </>
      )}
    </div>
  );
};

export default Card;