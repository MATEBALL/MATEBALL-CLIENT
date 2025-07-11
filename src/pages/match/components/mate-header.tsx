import type { MateHeaderProps } from '@pages/match/groups/types/mate-type';
import { MATCHING_HEADER_MESSAGE } from '../constants/matching';

const MateHeader = ({ nickname = '사용자', isGroupMatching }: MateHeaderProps) => (
  <section className="gap-[0.8rem] text-center">
    <h1 className="title_24_sb text-gray-black">
      {isGroupMatching
        ? MATCHING_HEADER_MESSAGE.group(nickname)
        : MATCHING_HEADER_MESSAGE.single(nickname)}
    </h1>
    <p className="body_16_m text-gray-600">상대의 정보를 확인하고, 매칭을 요청해 보세요.</p>
  </section>
);

export default MateHeader;
