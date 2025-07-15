import { LOTTIE_PATH } from '@constants/lotties';
import { useMatchConditionMutation } from '@hooks/use-match-condition';
import { Lottie } from '@toss/lottie';
import { useEffect } from 'react';

interface CompleteProps {
  selections: Record<string, string | null>;
}

const Complete = ({ selections }: CompleteProps) => {
  const { mutate } = useMatchConditionMutation();

  useEffect(() => {
    const { SUPPORT_TEAM, SYNC_SUPPORT_TEAM, VIEWING_STYLE, GENDER } = selections;
    const parsedTeamAllowed = SYNC_SUPPORT_TEAM === '상관없어요' ? null : SYNC_SUPPORT_TEAM;
    console.log({
      team: SUPPORT_TEAM,
      teamAllowed: parsedTeamAllowed,
      style: VIEWING_STYLE,
      genderPreference: GENDER,
    });

    if (!SUPPORT_TEAM || !VIEWING_STYLE || !GENDER) return;

    mutate({
      team: SUPPORT_TEAM,
      teamAllowed: parsedTeamAllowed,
      style: VIEWING_STYLE,
      genderPreference: GENDER,
    });
  }, [selections, mutate]);
  return (
    <div className="flex-1 flex-col-center gap-[4rem]">
      <p className="title_24_sb text-center text-gray-black">
        매칭 조건 설정이 끝났어요!
        <br />
        메이트를 찾아볼까요?
      </p>

      <Lottie src={LOTTIE_PATH.AGREE} loop={true} width="16rem" height="16rem" />
    </div>
  );
};

export default Complete;
