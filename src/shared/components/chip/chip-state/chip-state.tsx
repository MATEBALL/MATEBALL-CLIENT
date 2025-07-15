import { getColorType } from '@components/card/match-card/utils/get-color-type';
import { chipStateVariants } from '@components/chip/styles/chip-state-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

type ChipColorType = NonNullable<VariantProps<typeof chipStateVariants>['colorType']>;

export interface ChipStateProps {
  label?: string;
  status?: string;
  rate?: number;
  colorType?: ChipColorType;
  className?: string;
}

const ChipState = ({ status, rate, colorType, className }: ChipStateProps) => {
  if (rate !== undefined) {
    return (
      <div
        data-state="rate"
        className={cn(
          chipStateVariants({ colorType: 'active' }),
          'cap_12_m items-center justify-center',
          className,
        )}
      >
        <div className="flex items-center gap-[0.2rem] ">
          <span>매칭률</span>
          <div className="flex items-center">
            <p>{rate}</p>
            <p>%</p>
          </div>
        </div>
      </div>
    );
  }

  const finalColorType = getColorType(status, colorType);

  return (
    <p className={cn(chipStateVariants({ colorType: finalColorType }), className)}>{status}</p>
  );
};

export default ChipState;
