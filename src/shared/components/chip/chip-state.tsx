import { cn } from '@libs/cn';
import { chipStateVariants } from '@styles/chip-state-variants';
import type { VariantProps } from 'class-variance-authority';

type ChipStateType = NonNullable<VariantProps<typeof chipStateVariants>['state']>;

interface ChipStateProps {
	label: string;
	state?: ChipStateType;
	className?: string;
}

const ChipState = ({ label, state = 'default', className }: ChipStateProps) => {
	return <div className={cn(chipStateVariants({ state }), className)}>{label}</div>;
};

export default ChipState;
