import { buttonVariants } from '@components/button/button/styles/button-variants';
import Icon from '@components/icon/icon';
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
  icon?: string;
  iconColor?: string;
  iconSize?: string;
}

const Button = ({
  type = 'button',
  label,
  variant,
  size,
  className,
  disabled,
  icon,
  iconColor,
  iconSize,
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
      {icon && <Icon name={icon} size={iconSize} className={iconColor} />}
      {label}
      {icon && <Icon name={icon} size={iconSize} className={iconColor} />}
    </button>
  );
};

export default Button;
