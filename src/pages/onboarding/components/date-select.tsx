import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
import Button from '@components/button/button/button';
import ButtonGame from '@components/button/button-game/button-game';
import MonthCalendar from '@components/calendar/month-calendar';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import Icon from '@components/icon/icon';
import { mockGameDatas } from '@mocks/mockGameData';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';

interface DateSelectProps {
  onComplete: () => void;
}

const DateSelect = ({ onComplete }: DateSelectProps) => {
  const initialSelectedDate = getInitialSelectedDate(new Date());

  const [selectedDate, setSelectedDate] = useState<Date>(initialSelectedDate);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const { isOpen, open, close } = useBottomSheet();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedGameId(null);
    open();
  };

  const handleGameClick = (id: number) => {
    setSelectedGameId(id);
  };

  return (
    <div className="h-full w-full flex-col-between px-[1.6rem] pt-[1.6rem]">
      <div className="flex-col-center gap-[0.8rem]">
        <p className="head_20_sb text-gray-black">어떤 경기를 직관하고 싶으신가요?</p>
        <p className="cap_14_m text-gray-600">
          단, 직관 준비를 위해 2일 이후 날짜부터 선택 가능해요.
        </p>
      </div>

      <div className="w-full flex-col-center flex-grow">
        <MonthCalendar
          value={selectedDate}
          onWeekChange={handleDateSelect}
          onMonthChange={handleDateSelect}
        />
      </div>

      <BottomSheet isOpen={isOpen} onClose={close}>
        <div className="flex-col gap-[1.6rem]">
          <div className="flex-col gap-[1.3rem] px-[1.6rem] pt-[1.6rem]">
            <p className="cap_14_m text-gray-black">
              {format(selectedDate, 'M월 d일 EEEE', { locale: ko })}
            </p>
            <div className="flex-col-center gap-[0.8rem]">
              {mockGameDatas.map((game) => (
                <ButtonGame
                  key={game.id}
                  awayTeam={game.awayTeam}
                  homeTeam={game.homeTeam}
                  gameTime={game.gameTime}
                  stadium={game.stadium}
                  selected={selectedGameId === game.id}
                  onClick={() => handleGameClick(game.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex-col-center gap-[1.2rem]">
            <div className="flex-row-center gap-[0.8rem]">
              <Icon name="ic-caution" size={1.8} />
              <p className="cap_12_m text-gray-600">하루에 한 경기만 매칭 생성이 가능해요.</p>
            </div>
            <div className="w-full p-[1.6rem]">
              <Button
                label="맞춤 매칭 생성하기"
                disabled={!selectedGameId}
                onClick={() => {
                  close();
                  onComplete();
                }}
              />
            </div>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};

export default DateSelect;
