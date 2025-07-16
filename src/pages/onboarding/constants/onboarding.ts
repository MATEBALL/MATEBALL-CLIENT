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
    label: '열정응원러',
    icon: 'passion',
  },
  {
    id: 2,
    label: '경기집중러',
    icon: 'focus',
  },
  {
    id: 3,
    label: '직관먹방러',
    icon: 'eat',
  },
];

export const GENDER = ['남성', '여성', '상관없어요'] as const;

export const MATCHING_TYPE = ['1:1 매칭', '그룹 매칭'] as const;

export const GROUP_ROLE = ['그룹장', '그룹원'] as const;

export const ONBOARDING_STORAGE_KEY = 'mateball/onboardingSelections';

export const ONBOARDING_GROUP_STORAGE_KEY = 'mateball/onboardingGroupSelections';
