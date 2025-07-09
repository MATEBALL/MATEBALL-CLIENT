import type { InputHTMLAttributes, ReactNode } from 'react';
import { defineInputState } from '@/shared/utils/define-input-state';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  isFocused?: boolean;
  icon?: ReactNode;
}

const Input = ({ isError, value, id, isFocused, label, icon, ...props }: InputProps) => {
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
          type="text"
          className="flex-1 text-gray-black placeholder:text-gray-500"
          value={value}
          {...props}
        />
        {icon}
      </div>
    </div>
  );
};

export default Input;
