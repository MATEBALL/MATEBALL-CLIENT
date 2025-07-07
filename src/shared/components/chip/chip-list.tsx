import Chip from '@components/chip/chip';
import { chipVariants } from '@styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

interface ChipListProps {
  names: ChipColor[];
}

const ChipList = ({ names }: ChipListProps) => {
  return (
    <ul className="flex gap-[0.8rem]">
      {names.map((name) => (
        <li key={name}>
          <Chip label={name} bgColor={name} textColor={name} />
        </li>
      ))}
    </ul>
  );
};

export default ChipList;
