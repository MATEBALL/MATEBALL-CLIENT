import { chipStateVariants } from '@styles/chip-state-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

type ChipStateType = NonNullable<VariantProps<typeof chipStateVariants>['state']>;

interface ChipStateProps {
  label: string;
  state?: ChipStateType;
  className?: string;
}

const ChipState = ({ label, state = 'default', className }: ChipStateProps) => {
  if (state === '매칭률') {
    const rate = label.match(/\d+/)?.[0] ?? '0';

    return (
      <div
        data-state="rate"
        className={cn(
          chipStateVariants({ state }),
          'inline-flex justify-center cap_12_m items-center',
          className,
        )}
      >
        <div className="flex items-center gap-[0.2rem]">
          <p>매칭률</p>
          <div className="flex items-center">
            <p>{rate}</p>
            <p>%</p>
          </div>
        </div>
      </div>
    );
  }

  return <p className={cn(chipStateVariants({ state }), className)}>{label}</p>;
};

export default ChipState;
