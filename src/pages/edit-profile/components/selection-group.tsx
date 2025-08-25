import Button from '@components/button/button/button';

interface SelectionGroupProps {
  title: string;
  options: { id: number; label: string }[] | string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const SelectionGroup = ({ title, options, selectedValue, onSelect }: SelectionGroupProps) => {
  return (
    <div className="flex-col gap-[1.6rem]">
      <p className="body_16_m">{title}</p>
      <div className="flex flex-wrap gap-[0.8rem]">
        {options.map((option) => {
          const key = typeof option === 'string' ? option : option.id;
          const label = typeof option === 'string' ? option : option.label;
          const isSelected = selectedValue === label;

          return (
            <Button
              key={key}
              label={label}
              variant={isSelected ? 'skyblue' : 'gray2'}
              className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem] text-gray-900"
              onClick={() => onSelect(label)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectionGroup;
