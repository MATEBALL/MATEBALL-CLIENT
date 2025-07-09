import { buttonVariants } from '@components/button/styles/button-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

const Button = ({ label, variant, size, className, disabled, onClick, ariaLabel }: ButtonProps) => {
  return (
    <button
      type="button"
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
