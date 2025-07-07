import { cva } from 'class-variance-authority';

export const chipStateVariants = cva(
  'flex-row-center px-[0.8rem] py-[0.4rem] cap_12_m rounded-[8px]',
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
