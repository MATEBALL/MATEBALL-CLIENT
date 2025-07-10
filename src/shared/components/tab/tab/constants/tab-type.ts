export const TAB_TYPES = {
  SINGLE: '1:1',
  GROUP: '그룹',
} as const;

export type TabType = (typeof TAB_TYPES)[keyof typeof TAB_TYPES];
