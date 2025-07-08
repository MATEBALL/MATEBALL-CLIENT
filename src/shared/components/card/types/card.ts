import type { chipVariants } from '@components/chip/styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

export interface BaseCardProps {
  type: 'single' | 'group' | 'detailed';
  className?: string;
  name: string;
  teams: string;
  location: string;
  date: string;
  images: string[];
  chips: ChipColor[];
}

export interface SingleCardProps extends BaseCardProps {
  type: 'single';
  age: string;
  gender: string;
  introduction: string;
  color: 'blue' | 'white';
  chips: ChipColor[];
}

export interface GroupCardProps extends BaseCardProps {
  type: 'group';
  memberCount?: number;
  matched?: number;
  color: 'blue' | 'white';
}

export interface DetailedCardProps extends BaseCardProps {
  type: 'detailed';
  age: string;
  gender: string;
  introduction: string;
  percent: number;
  color?: 'blue' | 'white';
  chips: ChipColor[];
}

export type CardProps = SingleCardProps | GroupCardProps | DetailedCardProps;

export interface CardProfileProps {
  type: 'single' | 'group' | 'detailed';
  images: string[];
}

export interface CardGameInfoProps {
  teams: string;
  location: string;
  date: string;
  className?: string;
}
export interface CardMatchingRateProps {
  percent: number;
  className?: string;
}
