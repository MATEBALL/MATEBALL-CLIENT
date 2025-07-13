interface MatchGuideSectionProps {
  nickname: string;
}

const MatchGuideSection = ({ nickname }: MatchGuideSectionProps) => {
  return (
    <section className="flex-col-center gap-[0.8rem] text-center">
      <h1 className="title_24_sb">
        {nickname} 님을 위한
        <br />
        맞춤 매칭이 생성되었어요!
      </h1>
      <p className="body_16_m text-gray-600">
        딱! 맞는 메이트의 요청이 도착하면
        <br />
        '매칭 현황'에서 확인할 수 있어요.
      </p>
    </section>
  );
};

export default MatchGuideSection;
