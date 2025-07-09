import Icon from '@components/icon/icon';
import type { ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { defineInputState } from '@/shared/utils/define-input-state';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  isFocused?: boolean;
  icon?: string;
  errorMessage?: string;
}

const Input = forwardRef(
  (
    { isError, isFocused, value, id, label, icon, errorMessage, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputState = defineInputState(isError, isFocused);

    return (
      <div className="flex-col gap-[0.8rem]">
        {label && (
          <label htmlFor={id} className="body_16_m">
            {label}
          </label>
        )}
        <div className="body_16_m h-[5.6rem] w-full flex-row-between rounded-[12px] bg-gray-100 p-[1.6rem]">
          <input
            id={id}
            type="text"
            className="flex-1 text-gray-black placeholder:text-gray-500"
            value={value}
            ref={ref}
            {...props}
          />
          {icon && <Icon name={icon} />}
        </div>
        {isError && errorMessage && <p className="body_12_r text-alert">{errorMessage}</p>}
      </div>
    );
  },
);

export default Input;
