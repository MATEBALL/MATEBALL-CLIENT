import CardGameInfo from '@components/card/match-card/components/card-game-info';
import CardHeader from '@components/card/match-card/components/card-header';
import { cardVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProps } from '@components/card/match-card/types/card';
import Divider from '@components/divider/divider';
import { cn } from '@libs/cn';

const Card = (props: CardProps) => {
  const { type, className, color } = props;

  const introductionClass = 'cap_14_m mt-[1.2rem]';
  const gameInfoClass = 'mt-[1.2rem] ';

  return (
    <div className={cn(cardVariants({ type, color }), className)}>
      <CardHeader {...props} />
      <div className={cn(type === 'detailed' && 'flex-col gap-[2rem]')}>
        {(type === 'detailed' || type === 'user') && (
          <p className={introductionClass}>{props.introduction}</p>
        )}

        {type !== 'user' && type !== 'detailed' && (
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
            <div className="w-full flex-row items-center rounded-[8px] bg-gray-white px-[1.2rem] py-[0.8rem]">
              <div className="flex-1 flex-col-between gap-[0.2rem]">
                <p className="cap_14_sb text-gray-600">함께한 매칭</p>
                <p className="head_20_sb text-gray-800">{props.avgGame ?? '-'}</p>
              </div>
              <div className="h-[3.3rem]">
                <Divider direction="vertical" thickness={0.1} color="bg-gray-300" />
              </div>
              <div className="flex-1 flex-col-between gap-[0.2rem]">
                <p className="cap_14_sb text-gray-600">시즌 평균 직관</p>
                <p className="head_20_sb text-gray-800">{props.avgSeason ?? '-'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
