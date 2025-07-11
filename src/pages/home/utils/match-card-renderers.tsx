import Card from '@components/card/match-card/card';
import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';

export type SingleMatch = SingleCardProps & { id: string | number };
export type GroupMatch = GroupCardProps & { id: string | number };

export const getCommonProps = (match: SingleMatch | GroupMatch) => ({
  nickname: match.nickname,
  date: match.date,
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
    chips={[match.team as ChipColor, match.style as ChipColor]}
  />
);

export const renderGroupCard = (match: GroupMatch) => (
  <Card key={match.id} type="group" {...getCommonProps(match)} count={match.count} />
);

export const renderMatchCards = (matches: (SingleMatch | GroupMatch)[], isOneOnOne: boolean) => {
  return matches.map((match) => {
    if (isOneOnOne) {
      return renderSingleCard(match as SingleMatch);
    }
    return renderGroupCard(match as GroupMatch);
  });
};
