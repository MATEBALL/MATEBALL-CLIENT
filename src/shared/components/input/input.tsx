import Icon from '@components/Icon';
import { type InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  svg?: string;
  placeholder?: string;
}

const Input = ({ svg, placeholder, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="body_16_m h-[5.6rem] w-[34.3rem] flex-row-between rounded-[12px] bg-gray-100 p-[1.6rem] ">
      <input
        type="text"
        className="flex-1 text-gray-black placeholder:text-gray-500"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? '' : placeholder}
        {...props}
      />
      {isFocused && <Icon name={`ic-${svg}`} width={2.4} height={2.4} />}
    </div>
  );
};

export default Input;
