// import Card from '@components/card/match-card/card';
import { MATCHING_SUGGESTION_MESSAGE_TITLE } from '@pages/match/constants/matching';

interface CompleteProps {
  nickname: string;
}

const Complete = ({ nickname }: CompleteProps) => {
  
  return (
    <div className="w-full flex-1 flex-col-between gap-[4rem] whitespace-pre-line pt-[6.45rem]">
      <div>
        <p className="title_24_sb text-center text-gray-black">
          {MATCHING_SUGGESTION_MESSAGE_TITLE(nickname)}
        </p>
        {/* <Card isCreated className="w-full" {...cardProps} /> */}
      </div>

    </div>
  );
};

export default Complete;
