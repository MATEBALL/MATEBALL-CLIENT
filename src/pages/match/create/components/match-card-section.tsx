import Card from '@components/card/match-card/card';
import { formatToKoreanDate } from '@pages/home/utils/date-format';

const MatchCardSection = ({ type, matchData }: { type: string; matchData: any }) => {
  if (!matchData) {
    return (
      <div className="w-full">
        <div className="text-center text-gray-500">매칭 데이터를 불러오는 중...</div>
      </div>
    );
  }

  const cardProps = {
    ...matchData,
    chips: [matchData.team, matchData.style],
    date: formatToKoreanDate(matchData.date),
    type: type,
    className: 'w-full',
  };

  return (
    <div className="w-full">
      <Card {...cardProps} />
    </div>
  );
};

export default MatchCardSection;
