export const tabStyleMap = {
  home: {
    gap: 'gap-[2.4rem]',
    textActive: 'text-gray-white',
    textInactive: 'text-gray-500',
    borderActive: 'border-gray-white',
    borderInactive: 'border-transparent',
    height: 'h-[3.9rem]',
    typography: 'subhead_18_sb',
  },
  group: {
    gap: 'gap-[0.8rem]',
    textActive: 'text-gray-black',
    textInactive: 'text-gray-600',
    borderActive: 'border-gray-black',
    borderInactive: 'border-transparent',
    height: 'h-[3.0rem]',
    typography: 'head_20_sb',
  },
} as const;

export type TabStyleKey = keyof typeof tabStyleMap;
export type TabStyleValue = (typeof tabStyleMap)[TabStyleKey];
