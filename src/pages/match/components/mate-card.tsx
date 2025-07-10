import type { MateCardProps } from '@pages/match/groups/types/mate-type';

const MateCard = ({ mate }: MateCardProps) => {
  if (!mate) return null;

  return (
    <div className="w-full space-y-1 rounded-lg bg-gray-white">
      <p className="font-semibold">{mate.nickname} 님</p>
      <p className="text-gray-500 text-sm">{mate.intro}</p>
      <p className="text-gray-600 text-xs">
        팀: {mate.team} / 유형: {mate.type}
      </p>
    </div>
  );
};

export default MateCard;
