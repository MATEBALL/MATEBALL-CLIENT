import { buttonVariants } from '@components/button/button/styles/button-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  type?: ButtonType;
}

const Button = ({
  type = 'button',
  label,
  variant,
  size,
  className,
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      className={cn(
        buttonVariants({ variant, size }),
        disabled && 'cursor-not-allowed bg-gray-400',
        className,
      )}
    >
      {label}
    </button>
  );
};

export default Button;
