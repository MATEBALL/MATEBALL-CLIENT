import clsx from 'clsx';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  color?: string;
  thickness?: string;
  margin?: string;
  className?: string;
}

const Divider = ({
  direction = 'horizontal',
  color = 'bg-gray-200',
  thickness,
  margin,
  className,
}: DividerProps) => {
  const isHorizontal = direction === 'horizontal';

  return (
    <div
      className={clsx(
        isHorizontal
          ? `w-full ${thickness || 'h-px'} ${margin || 'my-4'}`
          : `h-full ${thickness || 'w-px'} ${margin || 'mx-4'}`,
        color,
        className,
      )}
    />
  );
};

export default Divider;
