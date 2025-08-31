export const FIRST_FUNNEL_STEPS = [
  'START',
  'SUPPORT_TEAM',
  'SYNC_SUPPORT_TEAM',
  'VIEWING_STYLE',
  'GENDER',
  'MATCHING_TYPE',
  'COMPLETE',
] as const;

export const GROUP_FUNNEL_STEPS = ['GROUP_ROLE', 'DATE_SELECT', 'COMPLETE'] as const;

export const TEAMS = [
  'KIA',
  '삼성',
  'LG',
  '두산',
  'KT',
  'SSG',
  '롯데',
  '한화',
  'NC',
  '키움',
] as const;

export const NO_TEAM_OPTION = '응원하는 팀이 없어요.';

export const SYNC_MATE = ['같은 팀 메이트와 보고 싶어요', '상관없어요'] as const;

export const VIEWING_STYLE = [
  {
    id: 1,
    label: '열정 응원러',
    icon: 'passion',
  },
  {
    id: 2,
    label: '경기 집중러',
    icon: 'focus',
  },
  {
    id: 3,
    label: '직관 먹방러',
    icon: 'eat',
  },
];

export const GENDER = [
  {
    id: 1,
    label: '남성',
    icon: 'male',
  },
  {
    id: 2,
    label: '여성',
    icon: 'female',
  },
  {
    id: 3,
    label: '상관없어요',
  },
];

export const MATCHING_TYPE = [
  {
    id: 1,
    label: '1:1 매칭',
    icon: 'my-filled',
  },
  {
    id: 2,
    label: '그룹 매칭',
    icon: 'group',
  },
];

export const GROUP_ROLE = [
  {
    id: 1,
    label: '그룹장',
    icon: 'leader',
  },
  {
    id: 2,
    label: '그룹원',
    icon: 'my-filled',
  },
];
