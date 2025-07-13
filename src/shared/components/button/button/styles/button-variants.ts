import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'subhead_18_sb flex-row-center cursor-pointer rounded-[1.2rem] transition-colors',
  {
    variants: {
      variant: {
        blue: 'bg-main-900 text-white',
        gray: 'bg-gray-400 text-white',
        skyblue: 'bg-main-200 text-main-900',
        white: 'border border-transparent bg-white text-gray-700',
        skyblueBorder: 'bg-main-200 text-main-900 outline outline-main-900',
      },
      size: {
        M: 'w-full px-[0.8rem] py-[1.2rem]',
        L: 'w-full px-[0.8rem] py-[1.2rem]',
        setting_M: 'w-full p-[0.8rem]',
        setting_L: 'w-full px-[0.8rem] py-[2rem]',
      },
    },
    defaultVariants: {
      variant: 'blue',
      size: 'M',
    },
  },
);
