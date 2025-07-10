import { cva } from 'class-variance-authority';

export const cardVariants = cva('relative w-[34.3rem] rounded-[12px] bg-white', {
  variants: {
    type: {
      single: 'h-[12.2rem] p-[1.6rem]',
      group: 'h-[12.9rem] p-[2rem]',
<<<<<<< HEAD
      detailed: 'gap-[1.2rem] p-[2rem] shadow-1',
=======
      detailed: 'p-[2rem] shadow-1',
>>>>>>> 980e243 (feat: card 공통 컴포넌트 구현 (#77))
    },
    color: {
      active: 'border-[1px] border-main-600 bg-main-200',
      inactive: 'bg-white',
    },
  },
  defaultVariants: {
    type: 'single',
    color: 'inactive',
  },
});

export const profileVariants = cva('aspect-square rounded-full border-[1px] object-cover', {
  variants: {
    type: {
      single: 'h-[6rem] border-gray-900',
      group: 'h-[2.8rem] border-main-600',
      detailed: 'h-[8.2rem] border-gray-900',
    },
  },
  defaultVariants: {
    type: 'single',
  },
});
