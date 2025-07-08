import { chipStateVariants } from '@components/chip/styles/chip-state-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

type ChipColorType = NonNullable<VariantProps<typeof chipStateVariants>['colorType']>;

interface ChipStateProps {
  label?: string;
  rate?: number;
  colorType?: ChipColorType;
  className?: string;
}

const ChipState = ({ label, rate, colorType = 'gray', className }: ChipStateProps) => {
  if (rate !== undefined) {
    return (
      <div
        data-state="rate"
        className={cn(
          chipStateVariants({ colorType }),
          'cap_12_m items-center justify-center',
          className,
        )}
      >
        <div className="flex items-center gap-[0.2rem]">
          <span>매칭률</span>
          <div className="flex items-center">
            <p>{rate}</p>
            <p>%</p>
          </div>
        </div>
      </div>
    );
  }

  return <p className={cn(chipStateVariants({ colorType }), className)}>{label}</p>;
};

export default ChipState;
