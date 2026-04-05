import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { TAB_TYPES, type TabType } from '@components/tab/tab/constants/tab-type';
import { format, parse } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

interface GameScheduleItem {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}

interface MatchingCtaBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  gameSchedule: GameScheduleItem[];
  initialType: TabType;
  onSubmit: (type: TabType) => void;
}

const MatchingCtaBottomSheet = ({
  isOpen,
  onClose,
  date,
  gameSchedule,
  initialType,
  onSubmit,
}: MatchingCtaBottomSheetProps) => {
  const [selectedType, setSelectedType] = useState<TabType>(initialType);

  useEffect(() => {
    if (!isOpen) return;
    setSelectedType(initialType);
  }, [initialType, isOpen]);

  const firstGame = gameSchedule[0];

  const formattedDate = useMemo(() => {
    const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    return format(parsedDate, 'M월 d일');
  }, [date]);

  const gameLabel = firstGame ? `${firstGame.awayTeam} vs ${firstGame.homeTeam}` : '경기 정보 없음';

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="w-full flex-col gap-[1.6rem] px-[1.6rem] pt-[1.6rem]">
        <p className="body_16_b text-gray-black">아직 매칭이 없어요. 먼저 만들어볼까요?</p>

        <div className="flex-row-center gap-[1.3rem]">
          <button
            type="button"
            className={`body_16_b h-[6.4rem] w-full flex-row-center rounded-[1.2rem] border px-[2rem] py-[1.2rem] ${
              selectedType === TAB_TYPES.SINGLE
                ? 'border-main-900 bg-main-200 text-main-900'
                : 'border-gray-300 bg-white text-gray-black'
            }`}
            onClick={() => setSelectedType(TAB_TYPES.SINGLE)}
          >
            1:1매칭
          </button>
          <button
            type="button"
            className={`body_16_b h-[6.4rem] w-full flex-row-center rounded-[1.2rem] border px-[2rem] py-[1.2rem] ${
              selectedType === TAB_TYPES.GROUP
                ? 'border-main-900 bg-main-200 text-main-900'
                : 'border-gray-300 bg-white text-gray-black'
            }`}
            onClick={() => setSelectedType(TAB_TYPES.GROUP)}
          >
            그룹매칭(최대 4인)
          </button>
        </div>

        <div className="w-full flex-row-end">
          <div className="flex-row-center gap-[0.4rem] rounded-[0.4rem] py-[0.4rem] pr-[0.8rem]">
            <Icon name="baseball" size={1.6} className="text-gray-600" />
            <span className="cap_12_m text-gray-600">{gameLabel}</span>
          </div>
          <div className="flex-row-center gap-[0.4rem] rounded-[0.4rem] py-[0.4rem] pr-[0.8rem]">
            <Icon name="calendar" size={1.6} className="text-gray-600" />
            <span className="cap_12_m text-gray-600">{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="w-full p-[1.6rem]">
        <Button label="매칭 생성하기" size="L" onClick={() => onSubmit(selectedType)} />
      </div>
    </BottomSheet>
  );
};

export default MatchingCtaBottomSheet;
