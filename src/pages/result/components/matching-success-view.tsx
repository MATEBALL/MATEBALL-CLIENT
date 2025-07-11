import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import { MATCHING_SUCCESS_TITLE } from '@pages/match/constants/matching';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

interface MatchingSuccessViewProps {
  isGroupMatching: boolean;
}

const MatchingSuccessView = ({ isGroupMatching }: MatchingSuccessViewProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex-col-between">
      <div className="flex-col-center gap-[4rem] rounded-full px-[1.6rem] pt-[4rem] pb-[8rem]">
        <h2 className="title_24_sb text-center">
          {isGroupMatching ? MATCHING_SUCCESS_TITLE.group : MATCHING_SUCCESS_TITLE.single}
        </h2>
        <div className="relative">
          <div className="matching-success-background" />
          <div className="matching-lottie-gradient" />
          <Lottie src={LOTTIE_PATH.SUCCESS} loop />
        </div>
        <p className="body_16_m text-center text-gray-600">
          이제 메이트와 소통할 수 있어요! <br />첫 인사를 건네볼까요?
        </p>
      </div>
      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        {/* TODO: onClick 로직 수정 */}
        <Button label="채팅방 입장하기" className="w-full" onClick={() => navigate(ROUTES.MATCH)} />
      </div>
    </div>
  );
};

export default MatchingSuccessView;
