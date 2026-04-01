import { matchQueries } from '@apis/match/match-queries';
import { userQueries } from '@apis/user/user-queries';
import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Chip from '@components/chip/chip';
import Divider from '@components/divider/divider';
import Icon from '@components/icon/icon';
import { useQuery } from '@tanstack/react-query';
import { getChipColor } from '../utils/get-chip-color';

interface MembersBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  matchId: number;
  canFetchMembers: boolean;
}

const MembersBottomSheet = ({
  isOpen,
  onClose,
  matchId,
  canFetchMembers,
}: MembersBottomSheetProps) => {
  const { data } = useQuery({
    ...matchQueries.MATCH_MEMBERS(matchId),
    enabled: isOpen && canFetchMembers,
  });
  const { data: user } = useQuery(userQueries.USER_INFO());

  const members = data?.results ?? [];
  const myNickname = user?.nickname;

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
                  <div className="relative h-[4.2rem] w-[4.2rem]">
                    <img src={member.img} alt="" className="h-full " />
                    {index === 0 && (
                      <span className="absolute right-0 bottom-0">
                        <Icon name="crown" size={1.2} className="text-owner" />
                      </span>
                    )}
                  </div>

                  <p className="body_16_b flex-1 text-gray-black">{member.nickname}</p>

                  <div className="flex-row-center gap-[0.4rem]">
                    <Chip label={member.team} bgColor={teamChipColor} textColor={teamChipColor} />
                    <Chip label={member.type} bgColor={styleChipColor} textColor={styleChipColor} />
                    <button
                      type="button"
                      disabled={member.nickname === myNickname}
                      className="cursor-pointer py-[1.2rem] pl-[1.2rem] disabled:cursor-not-allowed"
                    >
                      <Icon
                        name="arrow-right-18"
                        className={member.nickname === myNickname ? 'invisible' : ''}
                      />
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
