import CardGameInfo from '@components/card/match-card/components/card-game-info';
import CardHeader from '@components/card/match-card/components/card-header';
import CardMatchingRate from '@components/card/match-card/components/card-matching-rate';
import { cardVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProps } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';

const Card = (props: CardProps) => {
  const { type, className, color } = props;

  const introductionClass = 'cap_14_m mt-[1.6rem]';
  const gameInfoClass = 'mt-[1.2rem] ';
  const dividerClass = 'border-gray-300';
  const matchingRateClass = 'ml-auto';

  return (
    <div className={cn(cardVariants({ type, color }), className)}>
      <CardHeader {...props} />
      <div className={cn(type === 'detailed' && 'flex-col gap-[1.2rem]')}>
        {(type === 'detailed' || type === 'user') && (
          <p className={introductionClass}>{props.introduction}</p>
        )}

        {type !== 'user' && (
          <CardGameInfo
            className={cn(type === 'single' && 'mt-[1.2rem]', gameInfoClass)}
            awayTeam={props.awayTeam}
            homeTeam={props.homeTeam}
            stadium={props.stadium || ''}
            date={props.date}
          />
        )}

        {type === 'detailed' && (
          <div className="flex-col gap-[1.6rem]">
            <hr className={dividerClass} />
            <CardMatchingRate matchRate={props.matchRate} className={matchingRateClass} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
