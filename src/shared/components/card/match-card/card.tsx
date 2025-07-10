<<<<<<< HEAD
interface CardProps {
  type: 'solo' | 'group' | 'detailed';
  username: string;
  age: string;
  gender: string;
  team: string;
  enthusiasm: string;
  status: '매칭 완료' | '승인 대기 중' | '새 요청';
  subText?: string; // 한 줄 소개 or 인원 수 등
  percent?: number; // 매칭률 (optional)
  avatars: string[]; // 아바타 url 리스트
}

const Card = ({ type, username, age, gender, subText, percent, avatars }: CardProps) => {
  return (
    <div className="relative w-[34.3rem] rounded-[1rem] bg-white p-[1.2rem] shadow-md">
      {/* 유저/그룹 아바타 */}
      <div className="flex items-center">
        {avatars.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="-ml-2 h-8 w-8 rounded-full border-2 border-white"
          />
        ))}
        <div className="ml-3">
          <div className="font-bold">
            {type === 'group' ? `${username} 외 ${avatars.length - 1}명` : username}
          </div>
          <div className="text-gray-500 text-sm">
            {age}세 | {gender}
          </div>
        </div>
        <div className="ml-auto" />
      </div>

      {/* 태그 */}
      <div className="mt-2 flex gap-2" />

      {/* 한 줄 소개 or 매칭 인원 */}
      {subText && <div className="mt-2 text-sm">{subText}</div>}

      {/* 하단 경기 정보 */}
      <div className="mt-2 flex items-center gap-2 text-gray-500 text-xs">
        <span>⚾ 어웨이 vs 홈</span>
        <span>📍 경기장</span>
        <span>📅 NN월 NN일</span>
      </div>

      {/* 매칭률 표시 */}
      {percent !== undefined && (
        <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded bg-gray-100 px-2 py-1">
          <span className="text-xs">매칭률</span>
          <span className="font-bold text-sm">{percent}%</span>
        </div>
=======
import { cn } from '@libs/cn';
import CardGameInfo from './components/card-game-info';
import CardHeader from './components/card-header';
import CardMatchingRate from './components/card-matching-rate';
import { cardVariants } from './styles/card-variants';
import type { CardProps } from './types/card';

const Card = (props: CardProps) => {
  const { type, className, color } = props;

  const introductionClass = 'cap_14_m mt-[1.6rem]';
  const gameInfoClass = type === 'detailed' ? 'my-[1.2rem]' : 'mt-[0.4rem]';
  const dividerClass = 'border-gray-300';
  const matchingRateClass = 'mt-[1.6rem] ml-auto';

  return (
    <div className={cn(cardVariants({ type, color }), className)}>
      <CardHeader {...props} />

      {type === 'detailed' && <p className={introductionClass}>{props.introduction}</p>}

      <CardGameInfo className={gameInfoClass} {...props} />

      {type === 'detailed' && (
        <>
          <hr className={dividerClass} />
          <CardMatchingRate matchRate={props.matchRate} className={matchingRateClass} />
        </>
      )}
<<<<<<< HEAD

<<<<<<< HEAD
      {type !== 'detailed' && (
        <CardGameInfo teams={props.teams} location={props.location} date={props.date} />
>>>>>>> a1542aa (feat: biome 에러 수정(#49))
      )}
=======
      {type !== 'detailed' && <CardGameInfo className="mt-[0.4rem]" {...props} />}
>>>>>>> e6dad66 (fix: api 명세서에 맞게 props명 수정 및 gameinfo 컴포넌트 분리(#49))
=======
>>>>>>> 6982561 (fix: 분기 처리 및 chip state 넣기(#49))
    </div>
  );
};

export default Card;
