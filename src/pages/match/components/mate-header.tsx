import type { MateHeaderProps } from '@pages/match/groups/types/mate-type';

const MateHeader = ({ nickname, isGroupMatching }: MateHeaderProps) => (
  <section className="gap-[0.8rem] text-center">
    <h1 className="title_24_sb text-gray-black">
      {isGroupMatching
        ? `${nickname}님과 딱 맞는 그룹원이에요!`
        : `${nickname}님과 딱 맞는 메이트예요!`}
    </h1>
    <p className="body_16_m text-gray-600">상대의 정보를 확인하고, 매칭을 요청해 보세요.</p>
  </section>
);

export default MateHeader;
