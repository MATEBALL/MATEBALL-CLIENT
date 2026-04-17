import { userQueries } from '@apis/user/user-queries';
import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import { MATCHING_SUGGESTION_MESSAGE_TITLE } from '@pages/match/constants/matching';
import { useQuery } from '@tanstack/react-query';
import type { SelectedGame } from './date-select';

interface CompleteProps {
  selectedGame: SelectedGame;
  selectedDate: string;
  type?: 'single' | 'group';
}

const Complete = ({ selectedGame, selectedDate, type }: CompleteProps) => {
  const { data } = useQuery({
    ...userQueries.USER_INFO(),
    enabled: true,
  });

  const nickname = data?.nickname ?? '사용자';
  const imgUrl = data?.imgUrl ?? '';

  const cardProps: CardProps = {
    id: selectedGame.id,
    type: 'game',
    nickname,
    count: 1,
    imgUrl: imgUrl ? [imgUrl] : [],
    awayTeam: selectedGame.awayTeam,
    homeTeam: selectedGame.homeTeam,
    stadium: selectedGame.stadium,
    date: selectedDate,
    isGroup: type === 'group',
    className: 'w-full',
  };

  return (
    <div className="w-full flex-1 flex-col-between gap-[4rem] whitespace-pre-line pt-[6.45rem]">
      <div className="w-full flex-col gap-[4rem] px-[1.6rem]">
        <p className="title_24_sb text-center text-gray-black">
          {MATCHING_SUGGESTION_MESSAGE_TITLE(nickname)}
        </p>

        <Card {...cardProps} />
      </div>
    </div>
  );
};

export default Complete;
