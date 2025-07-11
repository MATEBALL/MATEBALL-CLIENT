import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { SYNC_MATE } from '../constants/onboarding';
import type { OnboardingStepProps } from '../types/onboarding';

const SyncSupportTeam = ({ selectedOption, onSelect }: OnboardingStepProps) => {
  return (
    <div className="onboarding-layout gap-[12.8rem]">
      <div className="onboarding-title">
        <Icon name="graphic-cheer-team" width={10.4} height={10.4} />
        <p className="head_20_sb text-center text-gray-black">
          메이트와 선호하는
          <br />
          응원 팀이 같으면 좋을까요?
        </p>
      </div>
      <div className="onboarding-inner">
        {SYNC_MATE.map((option) => (
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

export default SyncSupportTeam;
