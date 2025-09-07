import Icon from '@components/icon/icon';
import { iconColorMap, inputClassMap } from '@components/input/styles/input-variants';
import { cn } from '@libs/cn';
import type React from 'react';
import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { defineInputState } from '@/shared/utils/define-input-state';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onBlur'> {
  label?: string;
  isError?: boolean;
  isValid?: boolean;
  hasLength?: boolean;
  maxLength?: number;
  defaultMessage?: string;
  validationMessage?: string;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
  multiline?: boolean;
  length?: number;
  onBlur?: (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Input = ({
  isError,
  isValid,
  id,
  label,
  validationMessage,
  defaultMessage,
  length,
  maxLength = 50,
  onBlur,
  ref,
  className,
  hasLength = false,
  multiline = false,
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
          'body_16_m h-[5.6rem] w-full flex-row-between rounded-[12px] bg-gray-100 ',
          borderClass,
          className,
        )}
      >
        {multiline ? (
          <textarea
            id={id}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            maxLength={maxLength}
            className={cn(
              'w-full bg-transparent text-gray-black outline-none placeholder:text-gray-500',
              'resize-none whitespace-pre-wrap break-words',
              'h-[10.4rem] p-[1.6rem]',
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={id}
            type="text"
            className="flex-1 p-[1.6rem] text-gray-black placeholder:text-gray-500"
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            {...props}
          />
        )}
      </div>
      {messageToShow && (
        <div className="flex-row gap-[0.8rem]">
          <Icon
            name={inputState === 'valid' ? 'check-filled' : 'info-filled'}
            size={2}
            className={cn('text-gray-600', !multiline && iconColorClass)}
          />
          <div className="flex w-full justify-between">
            <p className={cn('cap_14_m text-gray-600', !multiline && iconColorClass)}>
              {messageToShow}
            </p>
            {hasLength && (
              <p className="cap_14_m text-gray-600">
                {length}/{maxLength}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
