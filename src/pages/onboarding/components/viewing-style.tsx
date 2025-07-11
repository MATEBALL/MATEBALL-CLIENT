import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { VIEWING_STYLE } from '../constants/onboarding';
import type { OnboardingStepProps } from '../types/onboarding';

const ViewingStyle = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="mt-[3.2rem] h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-watching" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">관람 스타일은 어떤 편이신가요?</p>
          <p className="cap_14_m text-center text-gray-600">
            스타일이 비슷한 메이트를 매칭해 드릴게요.
          </p>
        </div>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        {VIEWING_STYLE.map((option) => (
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

export default ViewingStyle;
