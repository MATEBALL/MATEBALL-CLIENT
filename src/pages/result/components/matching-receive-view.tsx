import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import type { ChipColor } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';
import { MATCHING_HEADER_MESSAGE } from '@pages/result/constants/matching-result';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

interface MatchingReceiveViewProps {
  isGroupMatching?: boolean;
}

const mockMate = {
  id: 1,
  type: 'detailed',
  nickname: '두밥비',
  date: '2025-07-20',
  imgUrl: ['/images/profile-1.png'],
  chips: ['LG', '열정응원러'] as ChipColor[],
  awayTeam: 'LG',
  homeTeam: '두산',
  stadium: '잠실야구장',
  age: '20',
  gender: '여성',
  team: 'lg',
  style: '열정응원러',
  introduction: '잠실더비전 보러가고파요',
  matchRate: 99,
};

const MatchingReceiveView = ({ isGroupMatching = true }: MatchingReceiveViewProps) => {
  const navigate = useNavigate();

  const handleReject = () => {
    navigate(`${ROUTES.RESULT}?type=fail`);
  };

  const handleAccept = () => {
    navigate(`${ROUTES.RESULT}?type=agree`);
  };

  return (
    <div className="h-full flex-col-between overflow-hidden">
      <div className="flex-col-center gap-[4rem] pt-[4rem]">
        <section className="gap-[0.8rem] text-center">
          <h1 className="title_24_sb text-gray-black">{MATCHING_HEADER_MESSAGE.description}</h1>
          <p className="body_16_m text-gray-600">
            {isGroupMatching
              ? MATCHING_HEADER_MESSAGE.group.subDescription
              : MATCHING_HEADER_MESSAGE.single.subDescription}
          </p>
        </section>

        <div className={cn('box-border w-full flex-row-center px-[1.6rem] pb-[1.6rem]')}>
          <Card {...mockMate} type="detailed" />
        </div>
      </div>

      <section className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          size="L"
          variant="skyblue"
          className="w-full"
          label="요청 거절하기"
          onClick={handleReject}
        />
        <Button size="L" className="w-full" label="요청 수락하기" onClick={handleAccept} />
      </section>
    </div>
  );
};

export default MatchingReceiveView;
