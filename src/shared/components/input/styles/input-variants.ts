import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'body_16_m h-[5.6rem] w-full flex-row-between rounded-[12px] bg-gray-100 p-[1.6rem]',
  {
    variants: {
      isFocused: {
        true: 'border border-main-900',
      },
      isError: {
        true: 'border border-state-error',
      },
      isValid: {
        true: 'border border-transparent text-state-success',
      },
    },
    defaultVariants: {
      isFocused: false,
      isError: false,
      isValid: false,
    },
  },
);

export const iconColorMap = {
  error: 'text-state-error',
  valid: 'text-state-success',
  focus: 'text-gray-500',
  default: 'text-gray-500',
};
