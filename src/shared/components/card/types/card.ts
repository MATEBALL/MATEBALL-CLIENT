export interface BaseCardProps {
  type: 'single' | 'group' | 'detailed';
  className?: string;
  name: string;
  teams: string;
  location: string;
  date: string;
  images: string[];
}

export interface SingleCardProps extends BaseCardProps {
  type: 'single';
  age: string;
  gender: string;
  introduction: string;
  color: 'blue' | 'white';
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
