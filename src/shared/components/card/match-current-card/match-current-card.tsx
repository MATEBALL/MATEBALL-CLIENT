import { GROUP_MAX } from '@components/card/constants/MATCH';

interface MatchCurrentCardProps {
  count: number;
}

const MatchCurrentCard = ({ count }: MatchCurrentCardProps) => {
  return (
    <div className="h-[9.8rem] w-[18.5rem] flex-col-center gap-[0.6rem] rounded-[0.8rem] bg-main-200 px-[4rem] py-[1.6rem]">
      <p className="body_16_m text-gray-700">현재 매칭된 인원</p>
      <div className="title_24_sb">
        <span className="text-main-900">{count}</span>
        <span className=" text-gray-600">/{GROUP_MAX}</span>
      </div>
    </div>
  );
};

export default MatchCurrentCard;
