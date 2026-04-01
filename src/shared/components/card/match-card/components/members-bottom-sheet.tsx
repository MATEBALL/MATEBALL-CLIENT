import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Chip from '@components/chip/chip';
import Divider from '@components/divider/divider';
import Icon from '@components/icon/icon';
import { getChipColor } from '../utils/get-chip-color';

interface MembersBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  matchId: number;
}

interface MemberItem {
  memberId: number;
  matchRate: number;
  age: number;
  gender: 'female' | 'male';
  nickname: string;
  introduction: string;
  team: string;
  type: string;
  avgGame: number;
  avgSeason: number;
  img: string;
}

const MOCK_MEMBERS: MemberItem[] = [
  {
    memberId: 24,
    matchRate: 95,
    age: 28,
    gender: 'female',
    nickname: 'Lions',
    introduction: '최강 삼성 안타 구자욱~',
    team: '삼성',
    type: '열정응원러',
    avgGame: 3,
    avgSeason: 0,
    img: 'https://mateball-file.s3.ap-northeast-2.amazonaws.com/profile.jpg',
  },
  {
    memberId: 27,
    matchRate: 90,
    age: 24,
    gender: 'female',
    nickname: '아재발되라',
    introduction: 'ㅁㄹㅇㅁㄻㄻ',
    team: '응원하는 팀이 없어요.',
    type: '경기집중러',
    avgGame: 4,
    avgSeason: 0,
    img: 'https://mateball-file.s3.ap-northeast-2.amazonaws.com/profile.jpg',
  },
];

const MembersBottomSheet = ({ isOpen, onClose }: MembersBottomSheetProps) => {
  // const { data } = useQuery({
  //   ...matchQueries.MATCH_MEMBERS(matchId),
  //   enabled: isOpen,
  // });

  // const members = data?.results ?? [];
  const members = MOCK_MEMBERS;

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="mt-[1.2rem] px-[1.6rem] pb-[2rem]">
        <ul>
          {members.map((member, index) => {
            const teamChipColor = getChipColor(member.team);
            const styleChipColor = getChipColor(member.type);

            return (
              <li key={member.memberId}>
                <div className="w-full flex-row items-center gap-[1.2rem] py-[1.6rem]">
                  <div className="h-[4.2rem] w-[4.2rem]">
                    <img src={member.img} alt="" className="h-full " />
                  </div>

                  <p className="body_16_b flex-1 text-gray-black">{member.nickname}</p>

                  <div className="flex-row-center gap-[0.4rem]">
                    <Chip label={member.team} bgColor={teamChipColor} textColor={teamChipColor} />
                    <Chip label={member.type} bgColor={styleChipColor} textColor={styleChipColor} />
                    <button type="button" className="py-[1.2rem] pl-[1.2rem]">
                      <Icon name="arrow-right-18" />
                    </button>
                  </div>
                </div>

                {index !== members.length - 1 && <Divider margin="my-[0.2rem]" />}
              </li>
            );
          })}
        </ul>
      </div>
    </BottomSheet>
  );
};

export default MembersBottomSheet;
