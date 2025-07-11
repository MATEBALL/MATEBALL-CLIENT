import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { NO_TEAM_OPTION, TEAMS } from '../constants/onboarding';
import type { OnboardingStepProps } from '../types/onboarding';

const SupportTeam = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="onboarding-layout gap-[5.4rem]">
      <div className="onboarding-title">
        <Icon name="graphic-team" width={10.4} height={10.4} />
        <p className="head_20_sb text-center text-gray-black">
          가장 먼저, 응원하시는 팀을 알려주세요!
        </p>
      </div>

      <div className="mb-[1.6rem] grid w-full grid-cols-2 gap-x-[1.2rem] gap-y-[0.8rem] px-[1.6rem]">
        {TEAMS.map((option) => (
          <Button
            key={option}
            label={option}
            size={'setting_M'}
            onClick={() => onSelect(option)}
            variant={selectedOption === option ? 'skyblueBorder' : 'white'}
          />
        ))}
        <div className="col-span-2">
          <Button
            label={NO_TEAM_OPTION}
            size={'setting_M'}
            onClick={() => onSelect(NO_TEAM_OPTION)}
            variant={selectedOption === NO_TEAM_OPTION ? 'skyblueBorder' : 'white'}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
