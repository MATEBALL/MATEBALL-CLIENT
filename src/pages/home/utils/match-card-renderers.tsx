import Card from '@components/card/match-card/card';
import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import { formatToKoreanDate } from './date-format';

export interface SingleMatch extends SingleCardProps {
  id: number;
}
export interface GroupMatch extends GroupCardProps {
  id: number;
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

export const renderSingleCard = (match: SingleMatch, onCardClick: (matchId: number) => void) => (
  <button type="button" onClick={() => onCardClick(match.id)} className="w-full cursor-pointer">
    <Card
      id={match.id}
      key={match.id}
      type="single"
      age={match.age}
      gender={match.gender}
      team={match.team}
      style={match.style}
      chips={[match.team, match.style] as ChipColor[]}
      {...getCommonProps(match)}
    />
  </button>
);
export const renderGroupCard = (match: GroupMatch, onCardClick: (matchId: number) => void) => (
  <button type="button" onClick={() => onCardClick(match.id)} className="w-full cursor-pointer">
    <Card
      id={match.id}
      key={match.id}
      type="group"
      count={match.count}
      {...getCommonProps(match)}
    />
  </button>
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

export const renderMatchCards = (
  matches: unknown[],
  isSingle: boolean,
  onCardClick: (matchId: number) => void,
) => {
  return matches
    .map((match) => {
      if (isSingle && isSingleMatch(match)) {
        return renderSingleCard(match, onCardClick);
      }
      if (!isSingle && isGroupMatch(match)) {
        return renderGroupCard(match, onCardClick);
      }
      return null;
    })
    .filter(Boolean);
};
