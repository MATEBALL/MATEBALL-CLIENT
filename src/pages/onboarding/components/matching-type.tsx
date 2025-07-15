import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { useMatchConditionMutation } from '@hooks/use-match-condition';
import { MATCHING_TYPE } from '@pages/onboarding/constants/onboarding';
import type { MatchingTypeProps } from '../types/onboarding';

const MatchingType = ({ selectedOption, onSelect, selections }: MatchingTypeProps) => {
  const { mutate } = useMatchConditionMutation();

  const handleSelect = (option: string) => {
    const { SUPPORT_TEAM, SYNC_SUPPORT_TEAM, VIEWING_STYLE, GENDER } = selections;
    const parsedTeamAllowed = SYNC_SUPPORT_TEAM === '상관없어요' ? null : SYNC_SUPPORT_TEAM;

    if (!SUPPORT_TEAM || !VIEWING_STYLE || !GENDER) return;

    mutate({
      team: SUPPORT_TEAM,
      teamAllowed: parsedTeamAllowed,
      style: VIEWING_STYLE,
      genderPreference: GENDER,
    });
    onSelect(option);
  };

  return (
    <div className="onboarding-layout gap-[5.4rem]">
      <div className="onboarding-title">
        <Icon name="matching" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">
            거의 다 왔어요.
            <br />
            어떤 유형의 매칭을 원하시나요?
          </p>
        </div>
      </div>

      <div className="onboarding-inner">
        {MATCHING_TYPE.map((option) => (
          <Button
            key={option}
            label={option}
            size={'setting_L'}
            variant={selectedOption === option ? 'skyblueBorder' : 'white'}
            onClick={() => handleSelect(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchingType;
