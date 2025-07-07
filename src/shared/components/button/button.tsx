import { buttonVariants } from '@constants/button-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ label, variant, size, className, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        buttonVariants({ variant, size }),
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      {label}
    </button>
  );
};

export default Button;
