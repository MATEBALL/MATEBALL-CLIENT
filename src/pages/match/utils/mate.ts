import type { ChipColor } from '@components/card/match-card/types/card';
import { formatGender } from '@components/card/match-card/utils/format-gender';
import type { MateItem } from '@pages/match/components/mate-carousel';
import type { matchMember } from '@/shared/types/match-types';

export const mapMateData = (mate: matchMember): MateItem => ({
  id: mate.memberId,
  type: 'detailed',
  nickname: mate.nickname,
  age: `${mate.age}세`,
  gender: formatGender(mate.gender),
  introduction: mate.introduction,
  team: mate.team,
  style: mate.type,
  matchRate: mate.matchRate,
  avgGame: mate.avgGame,
  avgSeason: mate.avgSeason,
  imgUrl: [mate.img],
  awayTeam: '',
  homeTeam: '',
  stadium: '',
  date: '',
  isCreated: false,
  chips: [mate.team, mate.type].filter((chip): chip is ChipColor => Boolean(chip)),
});
