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
  'KIA 타이거즈',
  '삼성 라이온즈',
  'LG 트윈스',
  '두산 베어스',
  'KT 위즈',
  'SSG 랜더스',
  '롯데 자이언츠',
  '한화 이글스',
  'NC 다이노스',
  '키움 히어로즈',
] as const;

export const NO_TEAM_OPTION = '응원하는 팀이 없어요.';

export const SYNC_MATE = ['같은 팀 메이트와 보고 싶어요', '상관없어요'] as const;

export const VIEWING_STYLE = ['열정 응원러', '경기 집중러', '직관 먹방러'] as const;

export const GENDER = ['남성', '여성', '상관없어요'] as const;

export const MATCHING_TYPE = ['1:1 매칭', '그룹 매칭'] as const;

export const GROUP_ROLE = ['그룹장', '그룹원'] as const;

export const ONBOARDING_STORAGE_KEY = 'mateball/onboardingSelections';

export const ONBOARDING_GROUP_STORAGE_KEY = 'mateball/onboardingGroupSelections';
