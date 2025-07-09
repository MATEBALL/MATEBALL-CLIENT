import { cva } from 'class-variance-authority';

export const buttonGameVariants = cva(
<<<<<<< HEAD
  'cap_14_m h-[4.5rem] w-full max-w-[34.2rem] flex-row-center cursor-pointer rounded-[12px] border-[1px] px-[2rem] py-[1.2rem] transition-colors',
=======
  'cap_14_m h-[4.5rem] w-full flex-row-center cursor-pointer rounded-[12px] border-[1px] px-[2rem] py-[1.2rem] transition-colors',
>>>>>>> 4681a3d (feat: button game 컴포넌트 구현 (#81))
  {
    variants: {
      variant: {
        selected: ' border-main-900 bg-main-200',
        default: 'border-gray-300 bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
