import { chipStateVariants } from '@constants/chip-state-variants';
import { cn } from '@libs/cn';
import type { VariantProps } from 'class-variance-authority';

type ChipStateName = VariantProps<typeof chipStateVariants>['state'];

interface ChipStateProps {
	label: string;
	state?: ChipStateName;
	className?: string;
}

const ChipState = ({ label, state = 'default', className }: ChipStateProps) => {
	return <div className={cn(chipStateVariants({ state }), className)}>{label}</div>;
};

export default ChipState;
