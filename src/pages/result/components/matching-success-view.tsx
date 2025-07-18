import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import { MATCHING_SUCCESS_TITLE } from '@pages/match/constants/matching';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface MatchingSuccessViewProps {
  isGroupMatching: boolean;
}

const MatchingSuccessView = ({ isGroupMatching }: MatchingSuccessViewProps) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const cardType = params.get('cardtype');
  usePreventBackNavigation(
    `${ROUTES.MATCH}?tab=${cardType === 'group' ? '그룹' : '1:1'}&filter=전체`,
  );

  return (
    <div className="h-full flex-col-between">
      <div className="flex-col-center gap-[4rem] rounded-full px-[1.6rem] pt-[4rem] pb-[8rem]">
        <h2 className="title_24_sb z-[var(--z-card-profile-4)] mb-[20rem] text-center">
          {isGroupMatching ? MATCHING_SUCCESS_TITLE.group : MATCHING_SUCCESS_TITLE.single}
        </h2>
        <div className="fixed top-[17rem]">
          <div className="matching-success-background" />
          <div className="matching-lottie-gradient" />
          <div className="z-[var(--z-card-profile-4)] h-[16rem] w-[16rem] flex-row-center">
            <Lottie src={LOTTIE_PATH.SUCCESS} loop className="w-[16rem]" />
          </div>
        </div>
        <p className="body_16_m z-[var(--z-card-profile-4)] text-center text-gray-600">
          이제 메이트와 소통할 수 있어요! <br />첫 인사를 건네볼까요?
        </p>
      </div>
      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          label="채팅방 입장하기"
          className="w-full"
          onClick={() => navigate(ROUTES.CHAT_ROOM)}
        />
      </div>
    </div>
  );
};

export default MatchingSuccessView;
