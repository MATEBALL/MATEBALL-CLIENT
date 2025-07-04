import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'subhead_18_sb inline-flex items-center justify-center rounded-[1.2rem] transition-colors',
  {
    variants: {
      variant: {
        blue: 'bg-main-900 text-white',
        gray: 'bg-gray-400 text-white',
        skyblue: 'bg-main-200 text-main-900',
        white: 'bg-white text-gray-700',
        skyblueBorder: 'border·border-main-900·bg-main-200·text-main-900',
      },
      size: {
        M: 'w-[16.75rem] py-[1.2rem]',
        L: 'w-[34.3rem] py-[1.2rem]',
        setting_M: 'w-[16.75rem] py-[0.8rem]',
        setting_L: 'w-[34.3rem] py-[2rem]',
      },
    },
    defaultVariants: {
      variant: 'blue',
      size: 'M',
    },
  },
);
