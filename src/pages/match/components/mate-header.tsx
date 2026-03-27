import { MATCHING_HEADER_MESSAGE } from '@pages/match/constants/matching';

interface MateHeaderProps {
  nickname: string;
  isGroupMatching?: boolean;
}

const MateHeader = ({ isGroupMatching, nickname }: MateHeaderProps) => (
  <section className="gap-[0.8rem] text-center">
    <h1 className="title_24_sb text-gray-black">
      {MATCHING_HEADER_MESSAGE(nickname, !!isGroupMatching)}
    </h1>
  </section>
);

export default MateHeader;
