import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'body_16_m h-[5.6rem] w-full flex-row-between rounded-[12px] bg-gray-100 p-[1.6rem]',
  {
    variants: {
      isFocused: {
        true: 'border-[1px] border-main-900',
      },
      isError: {
        true: 'border-[1px] border-state-error',
      },
    },
    defaultVariants: {
      isFocused: true,
      isError: false,
    },
  },
);
