import type { MateInfo } from '@pages/match/groups/types/mate-type';

interface Props {
  mate: MateInfo;
}

const GroupMateCard = ({ mate }: Props) => {
  if (!mate) return null;

  return (
    <div className="bg-white w-full rounded-lg shadow-sm space-y-1">
      <p className="font-semibold">{mate.nickname} 님</p>
      <p className="text-sm text-gray-500">{mate.intro}</p>
      <p className="text-xs text-gray-600">
        팀: {mate.team} / 유형: {mate.type}
      </p>
    </div>
  );
};

export default GroupMateCard;
