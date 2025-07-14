import CardGameInfo from '@components/card/match-card/components/card-game-info';
import CardHeader from '@components/card/match-card/components/card-header';
import CardMatchingRate from '@components/card/match-card/components/card-matching-rate';
import { cardVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProps } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';

const Card = (props: CardProps) => {
  const { type, className, color } = props;

  const introductionClass = type === 'detailed' ? 'cap_14_m mt-[1.6rem]' : 'cap_14_m mt-[1.6rem]';
  const gameInfoClass = type === 'detailed' ? 'my-[1.2rem]' : 'mt-[0.4rem]';
  const dividerClass = 'outline outline-[1px] outline-gray-300';
  const matchingRateClass = 'mt-[1.6rem] ml-auto';

  return (
    <div className={cn(cardVariants({ type, color }), className)}>
      <CardHeader {...props} />
      <div className={cn(type === 'detailed' && 'flex flex-col gap-[1.2rem]')}>
        {(type === 'detailed' || type === 'user') && (
          <p className={introductionClass}>{props.introduction}</p>
        )}

        {type !== 'user' && <CardGameInfo className={gameInfoClass} {...props} />}

        {type === 'detailed' && (
          <div>
            <hr className={dividerClass} />
            <CardMatchingRate matchRate={props.matchRate} className={matchingRateClass} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
