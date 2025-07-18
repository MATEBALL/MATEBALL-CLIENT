import Icon from '@components/icon/icon';
import { iconColorMap, inputClassMap } from '@components/input/styles/input-variants';
import { cn } from '@libs/cn';
import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { defineInputState } from '@/shared/utils/define-input-state';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  isValid?: boolean;
  defaultMessage?: string;
  validationMessage?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = ({
  isError,
  isValid,
  id,
  label,
  validationMessage,
  defaultMessage,
  onBlur,
  ref,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputState = defineInputState(isError, isFocused, isValid);
  const messageToShow = validationMessage ?? defaultMessage;

  const borderClass = inputClassMap[inputState];
  const iconColorClass = iconColorMap[inputState];

  return (
    <div className="flex-col gap-[0.8rem]">
      {label && (
        <label htmlFor={id} className="body_16_m">
          {label}
        </label>
      )}
      <div
        className={cn(
          'body_16_m h-[5.6rem] w-full flex-row-between rounded-[12px] bg-gray-100 p-[1.6rem]',
          borderClass,
        )}
      >
        <input
          id={id}
          type="text"
          className="flex-1 text-gray-black placeholder:text-gray-500"
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />
      </div>
      {messageToShow && (
        <div className="flex-row gap-[0.8rem]">
          <Icon
            name={inputState === 'valid' ? 'check-filled' : 'info-filled'}
            size={2}
            className={iconColorClass}
          />
          <p className={`cap_14_m ${iconColorClass}`}>{messageToShow}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
