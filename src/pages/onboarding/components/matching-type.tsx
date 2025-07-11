import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { MATCHING_TYPE } from '../constants/onboarding';
import type { OnboardingStepProps } from '../types/onboarding';

const MatchingType = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="mt-[3.2rem] h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-matching" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">
            거의 다 왔어요.
            <br />
            어떤 유형의 매칭을 원하시나요?
          </p>
        </div>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        {MATCHING_TYPE.map((option) => (
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

export default MatchingType;
