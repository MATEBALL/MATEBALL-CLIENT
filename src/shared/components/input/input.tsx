import Icon from '@components/icon/icon';
import { iconColorMap, inputVariants } from '@components/input/styles/input-variants';
import type { InputHTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';
import { defineInputState } from '@/shared/utils/define-input-state';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  isValid?: boolean;
  isFocused?: boolean;
  icon?: string;
  defaultMessage?: string;
  validationMessage?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, isValid, id, label, icon, validationMessage, defaultMessage, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputState = defineInputState(isError, isFocused, isValid);
    const messageToShow = validationMessage ?? defaultMessage;
    const iconColorClass = iconColorMap[inputState];

    return (
      <div className="flex-col gap-[0.8rem]">
        {label && (
          <label htmlFor={id} className="body_16_m">
            {label}
          </label>
        )}
        <div className={inputVariants({ isError, isFocused, isValid })}>
          <input
            id={id}
            type="text"
            className="flex-1 text-gray-black placeholder:text-gray-500"
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />
          {isFocused && icon && <Icon name={icon} />}
        </div>
        {messageToShow && (
          <div className="flex-row gap-[0.8rem]">
            <Icon name="ic-info-filled" size={2} className={iconColorClass} />
            <p className={`cap_14_m ${iconColorClass}`}>{messageToShow}</p>
          </div>
        )}
      </div>
    );
  },
);

export default Input;
