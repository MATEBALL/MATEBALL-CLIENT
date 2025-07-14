import { cva } from 'class-variance-authority';

export const cardVariants = cva('relative w-full rounded-[12px] bg-white', {
  variants: {
    type: {
      single: 'h-[12.2rem] p-[1.6rem]',
      group: 'h-[12.9rem] p-[2rem]',
      detailed: 'gap-[1.2rem] p-[2rem] shadow-1',
      user: 'p-[2rem] shadow-1',
    },
    color: {
      active: 'bg-main-200 outline outline-[1px] outline-main-600',
      inactive: 'bg-white',
    },
  },
  defaultVariants: {
    type: 'single',
    color: 'inactive',
  },
});

export const profileVariants = cva('aspect-square rounded-full object-cover', {
  variants: {
    type: {
      single: 'h-[6rem] outline outline-[1px] outline-gray-900',
      group: 'h-[2.8rem] outline outline-[1px] outline-main-600',
      detailed: 'h-[8.2rem] outline outline-[1px] outline-gray-900',
      user: 'h-[8.2rem] w-[8.2rem] outline outline-[1px] outline-gray-900',
    },
  },
  defaultVariants: {
    type: 'single',
  },
});