export type TabColorMode = 'home' | 'group';

export const getTextColorClass = (isActive: boolean, mode: TabColorMode): string => {
  if (isActive) {
    return mode === 'home' ? 'text-gray-white' : 'text-gray-black';
  } else {
    return mode === 'home' ? 'text-gray-500' : 'text-gray-600';
  }
};

export const getBorderColorClass = (isActive: boolean, mode: TabColorMode): string => {
  if (isActive) {
    return mode === 'home' ? 'border-gray-white' : 'border-gray-black';
  } else {
    return 'border-transparent';
  }
};

export const getTabGapClass = (colorMode: 'home' | 'group') => {
  return colorMode === 'home' ? 'gap-[2.4rem]' : 'gap-[0.8rem]';
};

export const getHeightClass = (mode: TabColorMode): string =>
  mode === 'home' ? 'h-[3.9rem]' : 'h-[3.0rem]';

export const getTypographyClass = (mode: TabColorMode): string =>
  mode === 'home' ? 'subhead_18_sb' : 'head_20_sb';
