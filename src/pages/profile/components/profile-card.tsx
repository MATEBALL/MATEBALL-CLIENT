import Button from '@components/button/button/button';
import { getChipColor } from '@components/card/match-card/utils/get-chip-color';
import Chip from '@components/chip/chip';
import Divider from '@components/divider/divider';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  nickname: string;
  imgUrl: string;
  team: string;
  style: string;
  matchCnt?: number;
  avgSeason?: number;
  onEditProfile?: () => void;
}

const ProfileCard = ({ nickname, imgUrl, team, style, matchCnt, avgSeason }: ProfileCardProps) => {
  const navigate = useNavigate();

  const teamChipColor = getChipColor(team);
  const styleChipColor = getChipColor(style);

  return (
    <div className="w-full flex-col gap-[1.2rem] rounded-[12px] bg-gray-950 p-[2rem]">
      <div className="flex-row-between">
        <div className="flex gap-[0.8rem]">
          <img
            src={imgUrl}
            alt={`${nickname} 프로필 이미지`}
            className="h-[6rem] w-[6rem] rounded-[60px]"
          />
          <div className="flex-col gap-[0.4rem]">
            <p className="subhead_18_sb text-gray-white">{nickname}</p>
            <div className="flex gap-[0.4rem]">
              <Chip label={team} bgColor={teamChipColor} textColor={teamChipColor} />
              <Chip label={style} bgColor={styleChipColor} textColor={styleChipColor} />
            </div>
          </div>
        </div>
        <div>
          <Button
            size="S"
            label="프로필 수정"
            className="cap_14_sb rounded-[8px]"
            onClick={() => navigate(ROUTES.PROFILE_EDIT)}
          />
        </div>
      </div>

      <div className="w-full flex-row-evenly rounded-[8px] bg-gray-700 px-[1.2rem] py-[0.8rem]">
        <div className="flex-col-between gap-[0.2rem]">
          <p className="cap_14_sb text-gray-400">함께한 매칭</p>
          <p className="head_20_sb text-gray-white">{matchCnt ?? '-'}</p>
        </div>
        <div className="h-[3.3rem]">
          <Divider direction="vertical" thickness={0.1} color="bg-gray-600" />
        </div>
        <div className="flex-col-between gap-[0.2rem]">
          <p className="cap_14_sb text-gray-400">시즌 평균 직관</p>
          <p className="head_20_sb text-gray-white">{avgSeason ?? '-'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
