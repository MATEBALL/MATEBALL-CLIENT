import Icon from '@components/Icon';
import { type InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
<<<<<<< HEAD
<<<<<<< HEAD
  placeholder?: string;
}

const Input = ({ placeholder, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };
=======
  svg?: string;
=======
>>>>>>> 7d251b9 (feat: x svg 고정으로 수정 (#38))
  placeholder?: string;
}

const Input = ({ placeholder, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
<<<<<<< HEAD
>>>>>>> 6c0fb11 (feat: input 컴포넌트 작성 (#38))
=======
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };
>>>>>>> 7d251b9 (feat: x svg 고정으로 수정 (#38))

  return (
    <div className="body_16_m h-[5.6rem] w-[34.3rem] flex-row-between rounded-[12px] bg-gray-100 p-[1.6rem] ">
      <input
        type="text"
        className="flex-1 text-gray-black placeholder:text-gray-500"
<<<<<<< HEAD
<<<<<<< HEAD
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? '' : placeholder}
        onChange={handleChange}
        {...props}
      />
      {(isFocused || value) && <Icon name="ic-x" width={2.4} height={2.4} onClick={handleClear} />}
=======
=======
        value={value}
>>>>>>> 7d251b9 (feat: x svg 고정으로 수정 (#38))
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? '' : placeholder}
        onChange={handleChange}
        {...props}
      />
<<<<<<< HEAD
      {isFocused && <Icon name={`ic-${svg}`} width={2.4} height={2.4} />}
>>>>>>> 6c0fb11 (feat: input 컴포넌트 작성 (#38))
=======
      {(isFocused || value) && <Icon name="ic-x" width={2.4} height={2.4} onClick={handleClear} />}
>>>>>>> 7d251b9 (feat: x svg 고정으로 수정 (#38))
    </div>
  );
};

export default Input;
