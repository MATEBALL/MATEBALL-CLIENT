import Button from '@components/button/button/button';
import Chip from '@components/chip/chip';
import type { ChipColor } from '@components/chip/chip-list';

export interface GameCardItem {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}

export const renderGameCard = (game: GameCardItem) => (
  <div key={game.id} className="flex-col gap-[2rem] rounded-[12px] bg-gray-950 p-[1.6rem]">
    <div className="flex-col gap-[1.6rem]">
      <div className="flex-row gap-[0.8rem]">
        <p className="cap_14_sb text-gray-400">{game.gameTime}</p>
        <p className="cap_14_sb text-gray-300">{game.stadium}</p>
      </div>
      <div className="flex-row gap-[2rem]">
        <Chip
          label={game.awayTeam}
          bgColor={game.awayTeam as ChipColor}
          textColor={game.awayTeam as ChipColor}
        />
        <p className="body_16_m text-gray-white">vs</p>
        <Chip
          label={game.homeTeam}
          bgColor={game.homeTeam as ChipColor}
          textColor={game.homeTeam as ChipColor}
        />
      </div>
    </div>

    {/* TODO: 버튼 스타일 추후 수정 */}
    {/* TODO: navigate 연결 */}
    <Button label="메이트 만나기" className="cap_14_sb h-[3.8rem] rounded-[8px] p-[0.8rem]" />
  </div>
);

export const renderGameCards = (games: GameCardItem[]) => {
  return games.map((game) => renderGameCard(game));
};
