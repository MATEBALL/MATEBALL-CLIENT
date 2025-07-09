import Icon from '@components/icon/icon';
import { iconColorMap, inputClassMap } from '@components/input/styles/input-variants';
import { cn } from '@libs/cn';
import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { defineInputState } from '@/shared/utils/define-input-state';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
<<<<<<< HEAD
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
=======
  placeholder: string;
  label?: string;
  id?: string;
}

const Input = ({ placeholder, label, id, ...props }: InputProps) => {
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
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
<<<<<<< HEAD
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
          <Icon name="ic-info-filled" size={2} className={iconColorClass} />
          <p className={`cap_14_m ${iconColorClass}`}>{messageToShow}</p>
        </div>
=======
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
      )}
      <div className="body_16_m h-[5.6rem] w-full flex-row-between rounded-[12px] bg-gray-100 p-[1.6rem] ">
        <input
          type="text"
          className="flex-1 text-gray-black placeholder:text-gray-500"
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? '' : placeholder}
          onChange={handleChange}
          {...props}
        />
        {(isFocused || value) && (
          <Icon
            name="ic-x"
            width={2.4}
            height={2.4}
            aria-label="입력 내용 삭제"
            onClick={handleClear}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
