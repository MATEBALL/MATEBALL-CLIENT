export const tabStyleMap = {
  home: {
    gap: 'gap-[1.2rem]',
    textActive: 'text-gray-white',
    textInactive: 'text-gray-500',
    borderActive: 'border-sub-900',
    borderInactive: 'border-transparent',
    borderThickness: 'border-b-[0.4rem]',
    size: 'h-[3.9rem] w-[5.6rem]',
    typography: 'subhead_18_sb',
  },
  match: {
    gap: 'gap-[2.4rem]',
    textActive: 'text-gray-black',
    textInactive: 'text-gray-600',
    borderActive: 'border-gray-black',
    borderInactive: 'border-transparent',
    borderThickness: 'border-b-[0.2rem]',
    size: 'h-[3.0rem] w-[4.8rem]',
    typography: 'head_20_sb',
  },
} as const;

export type TabStyleKey = keyof typeof tabStyleMap;
export type TabStyleValue = (typeof tabStyleMap)[TabStyleKey];
