import { LOTTIE_PATH } from '@constants/lotties';
import { MATCHING_SUGGESTION_MESSAGE_TITLE } from '@pages/match/constants/matching';

import { Lottie } from '@toss/lottie';

interface CompleteProps {
  nickname: string;
}

const Complete = ({ nickname }: CompleteProps) => {
  return (
    <div className="flex-1 flex-col-center gap-[4rem] whitespace-pre-line">
      <p className="title_24_sb text-center text-gray-black">
        {MATCHING_SUGGESTION_MESSAGE_TITLE(nickname)}
      </p>

      <Lottie src={LOTTIE_PATH.AGREE} loop={true} width="16rem" height="16rem" />
    </div>
  );
};

export default Complete;
