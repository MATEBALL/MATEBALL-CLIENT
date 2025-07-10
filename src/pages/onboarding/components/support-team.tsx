import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { NO_TEAM_OPTION, TEAMS } from '../constants/onboarding';

const SupportTeam = () => {
  return (
    <div className="h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-team" width={10.4} height={10.4} />
        <p className="head_20_sb text-center text-gray-black">
          가장 먼저, 응원하시는 팀을 알려주세요!
        </p>
      </div>

      <div className="mb-[1.6rem] grid w-full grid-cols-2 gap-x-[1.2rem] gap-y-[0.8rem] px-[1.6rem]">
        {TEAMS.map((team) => (
          <Button key={team} label={team} size={'setting_M'} />
        ))}
        <div className="col-span-2">
          <Button label={NO_TEAM_OPTION} size={'setting_M'} />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
