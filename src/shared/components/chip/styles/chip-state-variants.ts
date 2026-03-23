import { cva } from 'class-variance-authority';

export const chipStateVariants = cva(
  'cap_12_m flex-row-center rounded-[8px] px-[0.8rem] py-[0.4rem]',
  {
    variants: {
      colorType: {
        active: 'bg-main-900 text-gray-white',
        inactive: 'bg-gray-200 text-gray-700',
        dark: 'bg-gray-800 text-gray-white',
        outline: 'bg-gray-white text-main-900 outline outline-[1px] outline-main-900',
      },
    },
    defaultVariants: {
      colorType: 'inactive',
    },
  },
);
