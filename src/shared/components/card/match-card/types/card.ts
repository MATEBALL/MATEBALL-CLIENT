import type { chipVariants } from '@components/chip/styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

export interface BaseCardProps {
  type: 'single' | 'group' | 'detailed';
  className?: string;
  nickname: string;
  date: string;
  imgUrl: string[];
  chips: ChipColor[];
  awayTeam: string;
  homeTeam: string;
  stadium: string;
  status?: string;
  onClick?: () => void;
}

export interface SingleCardProps extends BaseCardProps {
  type: 'single';
  age: string;
  gender: string;
  color: 'active' | 'inactive';
  chips: ChipColor[];
  team: string;
  style: string;
}

export interface GroupCardProps extends BaseCardProps {
  type: 'group';
  count: number;
  color: 'active' | 'inactive';
}

export interface DetailedCardProps extends BaseCardProps {
  type: 'detailed';
  age: string;
  gender: string;
  introduction: string;
  matchRate: number;
  color?: 'active' | 'inactive';
  chips: ChipColor[];
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
