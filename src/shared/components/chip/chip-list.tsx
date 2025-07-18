import Chip from '@components/chip/chip';
import type { chipVariants } from '@components/chip/styles/chip-variants';
import { chipVariantOptions } from '@components/chip/styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

export type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

interface ChipListProps {
  names: ChipColor[];
}

const ChipList = ({ names }: ChipListProps) => {
  const validNames = names.filter((name) => Object.keys(chipVariantOptions.bgColor).includes(name));

  return (
    <ul className="flex min-h-[2.6rem] gap-[0.8rem]">
      {validNames.map((name) => (
        <li key={name}>
          <Chip label={name} bgColor={name} textColor={name} />
        </li>
      ))}
    </ul>
  );
};

export default ChipList;
