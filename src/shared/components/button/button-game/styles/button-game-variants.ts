import { cva } from 'class-variance-authority';

export const buttonGameVariants = cva(
  'cap_14_m h-[4.5rem] w-[34.2rem] flex-row-center cursor-pointer rounded-[1.2rem] border-[1px] px-[2rem] py-[1.2rem] transition-colors',
  {
    variants: {
      variant: {
        blue: ' border-main-900 bg-main-200',
        white: 'border-gray-300 bg-white',
      },
    },
    defaultVariants: {
      variant: 'white',
    },
  },
);
