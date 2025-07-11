import type { cardVariants } from '@components/card/match-card/styles/card-variants';
import type { chipVariants } from '@components/chip/styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

type ColorType = NonNullable<VariantProps<typeof cardVariants>['color']>;
export type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

export interface BaseCardProps {
  type: 'single' | 'group' | 'detailed';
  className?: string;
  nickname: string;
  date: string;
  imgUrl: string | string[];
  awayTeam: string;
  homeTeam: string;
  stadium: string;
<<<<<<< HEAD
<<<<<<< HEAD
  status?: string;
=======
  status: string;
>>>>>>> 980e243 (feat: card 공통 컴포넌트 구현 (#77))
=======
  status?: string;
  color?: ColorType;
>>>>>>> d70367a (feat: 매칭 목록 및 필터링 구현(#83))
}

export interface SingleCardProps extends BaseCardProps {
  type: 'single';
  age: string;
  gender: string;
  chips?: ChipColor[];
  team: string;
  style: string;
  matchRate?: number;
}

export interface GroupCardProps extends BaseCardProps {
  type: 'group';
  count: number;
  matchRate?: number;
}

export interface DetailedCardProps extends BaseCardProps {
  type: 'detailed';
  age: string;
  gender: string;
  introduction: string;
  matchRate: number;
  chips?: ChipColor[];
  team: string;
  style: string;
}

export type CardProps = SingleCardProps | GroupCardProps | DetailedCardProps;

export interface CardProfileProps {
  type: 'single' | 'group' | 'detailed';
  imgUrl: string[];
}

export interface CardGameInfoProps {
  awayTeam: string;
  homeTeam: string;
  stadium: string;
  date: string;
  className?: string;
}
export interface CardMatchingRateProps {
  matchRate: number;
  className?: string;
}
