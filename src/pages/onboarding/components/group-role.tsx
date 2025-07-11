import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { GROUP_ROLE } from '../constants/onboarding';
import type { OnboardingStepProps } from '../types/onboarding';

const GroupRole = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="mt-[3.2rem] h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-group-role" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">어떤 그룹 역할을 원하시나요?</p>
          <p className="cap_14_m text-center text-gray-600">
            그룹장은 맞춤 그룹을 생성할 수 있고,
            <br />
            그룹원은 기존 그룹에 들어갈 수 있어요.
          </p>
        </div>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        {GROUP_ROLE.map((option) => (
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

export default GroupRole;
