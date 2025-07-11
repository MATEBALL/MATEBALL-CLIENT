import Card from '@components/card/match-card/card';
import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import { formatToKoreanDate } from './date-format';

export interface SingleMatch extends SingleCardProps {
  id: string | number;
}
export interface GroupMatch extends GroupCardProps {
  id: string | number;
}

export const getCommonProps = (match: SingleMatch | GroupMatch) => ({
  nickname: match.nickname,
  date: formatToKoreanDate(match.date),
  imgUrl: match.imgUrl,
  awayTeam: match.awayTeam,
  homeTeam: match.homeTeam,
  stadium: match.stadium,
  matchRate: match.matchRate,
});

export const renderSingleCard = (match: SingleMatch) => (
  <Card
    key={match.id}
    type="single"
    {...getCommonProps(match)}
    age={match.age}
    gender={match.gender}
    team={match.team}
    style={match.style}
    chips={[match.team, match.style] as ChipColor[]}
  />
);

export const renderGroupCard = (match: GroupMatch) => (
  <Card key={match.id} type="group" {...getCommonProps(match)} count={match.count} />
);

const isSingleMatch = (match: unknown): match is SingleMatch => {
  return (
    typeof match === 'object' &&
    match !== null &&
    'age' in match &&
    'gender' in match &&
    'team' in match &&
    'style' in match
  );
};

const isGroupMatch = (match: unknown): match is GroupMatch => {
  return typeof match === 'object' && match !== null && 'count' in match && !('age' in match);
};

export const renderMatchCards = (matches: unknown[], isOneOnOne: boolean) => {
  return matches
    .map((match) => {
      if (isOneOnOne && isSingleMatch(match)) {
        return renderSingleCard(match);
      }
      if (!isOneOnOne && isGroupMatch(match)) {
        return renderGroupCard(match);
      }
      return null;
    })
    .filter(Boolean);
};
