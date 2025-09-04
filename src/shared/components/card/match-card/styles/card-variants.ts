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
      active: 'bg-main-200 outline outline-main-600',
      inactive: 'bg-white',
    },
  },
  defaultVariants: {
    type: 'single',
    color: 'inactive',
  },
});

export const profileVariants = cva('overflow-hidden rounded-full object-cover', {
  variants: {
    type: {
      single: 'h-[6rem] w-[6rem] ',
      group: 'h-[2.8rem] w-[2.8rem]',
      detailed: 'h-[8.2rem] w-[8.2rem] ',
      user: 'h-[8.2rem] w-[8.2rem] ',
    },
  },
  defaultVariants: {
    type: 'single',
  },
});
