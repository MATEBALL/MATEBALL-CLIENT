import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { VIEWING_STYLE } from '@pages/onboarding/constants/onboarding';
import type { OnboardingStepProps } from '@pages/onboarding/types/onboarding';

const ViewingStyle = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="onboarding-layout gap-[5.4rem]">
      <div className="onboarding-title">
        <Icon name="watching" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">관람 스타일은 어떤 편이신가요?</p>
          <p className="cap_14_m text-center text-gray-600">
            스타일이 비슷한 메이트를 매칭해 드릴게요.
          </p>
        </div>
      </div>

      <div className="onboarding-inner">
        {VIEWING_STYLE.map((option) => (
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

export default ViewingStyle;
