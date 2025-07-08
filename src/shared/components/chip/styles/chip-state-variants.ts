import { cva } from 'class-variance-authority';

export const chipStateVariants = cva(
<<<<<<< HEAD
  'cap_12_m flex-row-center rounded-[8px] px-[0.8rem] py-[0.4rem]',
=======
  'flex-row-center px-[0.8rem] py-[0.4rem] cap_12_m rounded-[8px]',
>>>>>>> 0d6aa9b (feat: chip-state 컴포넌트 구현 (#54))
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
