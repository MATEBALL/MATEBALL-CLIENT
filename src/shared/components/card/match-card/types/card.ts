import type { cardVariants } from '@components/card/match-card/styles/card-variants';
import type { chipStateVariants } from '@components/chip/styles/chip-state-variants';
import type { chipVariants } from '@components/chip/styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

export type ChipColorType = NonNullable<VariantProps<typeof chipStateVariants>['colorType']>;
type ColorType = NonNullable<VariantProps<typeof cardVariants>['color']>;
export type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

export interface BaseCardProps {
  id: number;
  chipColor?: ChipColorType;
  type: 'single' | 'group' | 'detailed';
  className?: string;
  nickname: string;
  date: string;
  imgUrl: string[];
  chips?: ChipColor[];
  awayTeam: string;
  homeTeam: string;
  stadium?: string;
  status?: string;
  color?: ColorType;
  onClick?: () => void;
}

export interface SingleCardProps extends BaseCardProps {
  type: 'single';
  age: string;
  gender: string;
  color?: 'active' | 'inactive';
  chipColor?: ChipColorType;
  chips?: ChipColor[];
  team: string;
  style: string;
  matchRate?: number;
}

export interface GroupCardProps extends BaseCardProps {
  type: 'group';
  count: number;
  color?: 'active' | 'inactive';
  matchRate?: number;
}

export interface DetailedCardProps extends BaseCardProps {
  type: 'detailed';
  age: string;
  gender: string;
  introduction: string;
  matchRate: number;
  chips: ChipColor[];
  team: string;
  style: string;
}

export interface UserCardProps {
  type: 'user';
  nickname: string;
  imgUrl: string[];
  team: string;
  style: string;
  age: string;
  gender: string;
  introduction: string;
  className?: string;
  color?: 'active' | 'inactive';
  chips: ChipColor[];
}

export type CardProps = SingleCardProps | GroupCardProps | DetailedCardProps | UserCardProps;

export interface CardProfileProps {
  type: 'single' | 'group' | 'detailed' | 'user';
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
