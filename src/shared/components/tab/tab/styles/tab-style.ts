export const tabStyleMap = {
  home: {
    gap: 'gap-[1.2rem]',
    textActive: 'text-gray-white',
    textInactive: 'text-gray-500',
    borderActive: 'border-sub-900',
    borderInactive: 'border-transparent',
    borderStyle: 'border-b-[0.4rem]',
    size: 'h-[3.9rem] w-[5.6rem]',
    textStyle: 'subhead_18_sb',
  },
  match: {
    gap: 'px-[1.6rem] border-b border-gray-300',
    textActive: 'text-gray-black',
    textInactive: 'text-gray-600',
    borderActive: 'after:bg-gray-black',
    borderInactive: 'after:bg-transparent',
    borderStyle:
      'relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 ' +
      'after:h-[0.2rem] after:w-[12rem] after:rounded-full after:content-[""]',
    size: 'h-[3.0rem] w-[17.2rem] mx-[2.6rem]',
    textStyle: 'head_20_sb pb-[0.4rem]',
  },
} as const;

export type TabStyleKey = keyof typeof tabStyleMap;
export type TabStyleValue = (typeof tabStyleMap)[TabStyleKey];
