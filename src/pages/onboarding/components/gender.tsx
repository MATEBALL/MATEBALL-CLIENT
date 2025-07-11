import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { GENDER } from '../constants/onboarding';

interface GenderProps {
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

const Gender = ({ selectedOption, onSelect }: GenderProps) => {
  return (
    <div className="h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-gender" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">
            선호하시는 메이트의 성별이 있나요?
          </p>
        </div>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        {GENDER.map((option) => (
          <Button
            key={option}
            label={option}
            size={'setting_L'}
            variant={selectedOption === option ? 'skyblueBorder' : 'white'}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gender;
