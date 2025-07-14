import {
  MATCHING_GUIDE_MESSAGE_DESCRIPTION,
  MATCHING_GUIDE_MESSAGE_TITLE,
} from '@pages/match/constants/matching';

interface MatchGuideSectionProps {
  nickname: string;
}

const MatchGuideSection = ({ nickname }: MatchGuideSectionProps) => {
  return (
    <section className="flex-col-center gap-[0.8rem] whitespace-pre-line text-center">
      <h1 className="title_24_sb">{MATCHING_GUIDE_MESSAGE_TITLE(nickname)}</h1>
      <p className="body_16_m whitespace-pre-line text-gray-600">
        {MATCHING_GUIDE_MESSAGE_DESCRIPTION}
      </p>
    </section>
  );
};

export default MatchGuideSection;
