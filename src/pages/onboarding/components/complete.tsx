import { userQueries } from '@apis/user/user-queries';
import { MATCHING_SUGGESTION_MESSAGE_TITLE } from '@pages/match/constants/matching';
import { useQuery } from '@tanstack/react-query';
import CompleteGroupCard from './complete-group-card';
import CompleteSingleCard from './complete-single-card';

interface CompleteProps {
  matchId: number;
  type?: 'single' | 'group';
}

const Complete = ({ matchId, type }: CompleteProps) => {
  const { data } = useQuery({
    ...userQueries.USER_INFO(),
    enabled: true,
  });

  const nickname = data?.nickname ?? '사용자';

  return (
    <div className="w-full flex-1 flex-col-between gap-[4rem] whitespace-pre-line pt-[6.45rem]">
      <div className="w-full flex-col gap-[4rem] px-[1.6rem]">
        <p className="title_24_sb text-center text-gray-black">
          {MATCHING_SUGGESTION_MESSAGE_TITLE(nickname)}
        </p>

        {type === 'single' ? (
          <CompleteSingleCard matchId={matchId} />
        ) : (
          <CompleteGroupCard matchId={matchId} />
        )}
      </div>
    </div>
  );
};

export default Complete;
