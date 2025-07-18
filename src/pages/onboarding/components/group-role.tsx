import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { GROUP_ROLE } from '@pages/onboarding/constants/onboarding';
import type { OnboardingStepProps } from '@pages/onboarding/types/onboarding';

const GroupRole = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="onboarding-layout gap-[5.4rem]">
      <div className="onboarding-title">
        <Icon name="group-role" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">어떤 그룹 역할을 원하시나요?</p>
          <p className="cap_14_m text-center text-gray-600">
            그룹장은 맞춤 그룹을 생성할 수 있고,
            <br />
            그룹원은 기존 그룹에 들어갈 수 있어요.
          </p>
        </div>
      </div>

      <div className="onboarding-inner">
        {GROUP_ROLE.map((option) => (
          <Button
            key={option.id}
            label={option.label}
            size="setting_L"
            variant={selectedOption === option.label ? 'skyblueBorder' : 'white'}
            onClick={() => onSelect(option.label)}
            icon={option.icon}
            className="flex gap-[0.8rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default GroupRole;
