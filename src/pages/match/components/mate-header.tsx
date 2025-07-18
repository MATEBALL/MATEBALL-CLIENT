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
    <p className="body_16_m text-gray-600">상대의 정보를 확인하고, 매칭을 요청해 보세요.</p>
  </section>
);

export default MateHeader;
