import Button from '@components/button/button/button';
import type { ChipColor } from '@components/card/match-card/types/card';
import Chip from '@components/chip/chip';

export interface GameCardItem {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
  matchCount?: number;
}

interface GameCardProps {
  game: GameCardItem;
  onGameClick: (game: GameCardItem) => void;
}

const GameCard = ({ game, onGameClick }: GameCardProps) => {
  return (
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

      <Button
        label="메이트 만나기"
        className="cap_14_sb rounded-[8px] px-[0.8rem] py-[1rem]"
        onClick={() => onGameClick(game)}
      />
    </div>
  );
};

export default GameCard;
