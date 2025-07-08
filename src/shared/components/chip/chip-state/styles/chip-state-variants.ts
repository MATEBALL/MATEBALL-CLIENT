import { cva } from 'class-variance-authority';

export const chipStateVariants = cva(
  'cap_12_m flex-row-center rounded-[8px] px-[0.8rem] py-[0.4rem]',
  {
    variants: {
      colorType: {
        main: 'bg-main-900 text-gray-white',
        gray: 'bg-gray-200 text-gray-700',
      },
    },
    defaultVariants: {
      colorType: 'gray',
    },
  },
);
