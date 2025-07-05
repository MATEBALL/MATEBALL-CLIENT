import { cva } from 'class-variance-authority';

export const calendarDayVariants = cva('flex items-center justify-center text-center', {
  variants: {
    monthSelected: {
      true: 'h-[4rem] w-[4rem] rounded-[8px] bg-main-900 text-gray-white',
      false: '',
    },
    weekSelected: {
      true: 'rounded-[12px] bg-main-900',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed text-gray-500',
      false: 'cursor-pointer cursor-pointer text-gray-900',
    },
    isMonday: {
      true: 'text-gray-600',
      false: '',
    },
    size: {
      month: 'h-[4.8rem] w-[4.8rem] px-[1.65rem] py-[1.35rem]',
      week: 'w-[3.8rem] flex-col py-[0.8rem]',
    },
  },
  defaultVariants: {
    monthSelected: false,
    disabled: false,
    isMonday: false,
  },
});
