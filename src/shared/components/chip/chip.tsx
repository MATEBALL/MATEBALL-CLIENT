import { chipVariants } from '@components/chip/styles/chip-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

type ChipColor = VariantProps<typeof chipVariants>['bgColor'];

interface ChipProps extends VariantProps<typeof chipVariants> {
  label: string;
  color?: ChipColor;
  className?: string;
}

const Chip = ({ label, color, bgColor, textColor, className }: ChipProps) => {
  const appliedBg = bgColor ?? color;
  const appliedText = textColor ?? color;

  return (
    <div className={cn(chipVariants({ bgColor: appliedBg, textColor: appliedText }), className)}>
      {label}
    </div>
  );
};

export default Chip;
