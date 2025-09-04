import { cva } from 'class-variance-authority';

export const calendarDayVariants = cva('flex-row-center text-center', {
  variants: {
    monthSelected: {
      true: 'h-[4rem] w-[4rem] rounded-[8px] bg-main-900 text-gray-white',
    },
    weekSelected: {
      true: 'rounded-[12px] bg-main-900',
    },
    disabled: {
      true: 'cursor-not-allowed text-gray-500',
      false: 'cursor-pointer text-gray-900',
    },
    notCurrentMonth: {
      true: 'pointer-events-none opacity-0',
    },
    size: {
      month: 'h-[4.8rem] w-[4.8rem] px-[1.65rem] py-[1.35rem]',
      week: 'w-[3.8rem] flex-col py-[0.8rem]',
    },
  },
  defaultVariants: {
    monthSelected: false,
    disabled: false,
  },
});
