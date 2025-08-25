import clsx from 'clsx';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  color?: string; // tailwind 클래스 ex: bg-gray-200
  thickness?: number; // rem 단위 숫자 ex: 0.1 -> 0.1rem
  margin?: string; // tailwind 마진 클래스
  className?: string;
}

const Divider = ({
  direction = 'horizontal',
  color = 'bg-gray-200',
  thickness = 0.1,
  margin,
  className,
}: DividerProps) => {
  const isHorizontal = direction === 'horizontal';

  return (
    <div
      className={clsx(
        isHorizontal ? `w-full ${margin || 'my-4'}` : `h-full ${margin || 'mx-4'}`,
        color,
        className,
      )}
      style={isHorizontal ? { height: `${thickness}rem` } : { width: `${thickness}rem` }}
    />
  );
};

export default Divider;
