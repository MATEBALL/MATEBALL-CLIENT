import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import type { OnboardingStepProps } from '@pages/onboarding//types/onboarding';
import { GENDER } from '@pages/onboarding/constants/onboarding';

const Gender = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="onboarding-layout gap-[5.4rem]">
      <div className="onboarding-title">
        <Icon name="gender" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">선호하는 메이트의 성별이 있나요?</p>
        </div>
      </div>

      <div className="onboarding-inner">
        {GENDER.map((option) => (
          <Button
            key={option.id}
            label={option.label}
            size="setting_L"
            variant={selectedOption === option.label ? 'skyblueBorder' : 'white'}
            onClick={() => onSelect(option.label)}
            icon={option.icon}
            className="flex gap-[0.8rem] "
          />
        ))}
      </div>
    </div>
  );
};

export default Gender;
