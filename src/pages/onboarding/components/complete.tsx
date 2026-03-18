import { MATCHING_SUGGESTION_MESSAGE_TITLE } from '@pages/match/constants/matching';
import CompleteButtonSection from '@pages/onboarding/components/complete-button-section';

interface CompleteProps {
  nickname: string;
}

const Complete = ({ nickname }: CompleteProps) => {
  return (
    <div className="w-full flex-1 flex-col-between gap-[4rem] whitespace-pre-line pt-[6.45rem]">
      <p className="title_24_sb text-center text-gray-black">
        {MATCHING_SUGGESTION_MESSAGE_TITLE(nickname)}
      </p>

      <CompleteButtonSection />
    </div>
  );
};

export default Complete;
