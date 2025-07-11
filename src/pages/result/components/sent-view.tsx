import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import { MATCHING_COMPLETE_MESSAGE } from '@pages/match/constants/matching';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

interface SentViewProps {
  isGroupMatching?: boolean;
  userNickname: string;
}

const SentView = ({ isGroupMatching = true, userNickname }: SentViewProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex-col-between">
      <section className='pt-[4rem] flex-col-center gap-[4rem]'>
      <h2 className="title_24_sb">매칭 요청이 전송되었어요!</h2>
      <div className="flex-row-center h-[16rem] w-[16rem]">
        <Lottie src={LOTTIE_PATH.SEND} loop />
      </div>
      <p className="body_16_m text-center text-gray-600">
        {isGroupMatching
          ? MATCHING_COMPLETE_MESSAGE.group
          : MATCHING_COMPLETE_MESSAGE.single(userNickname)}
        <br />
        ‘매칭 현황’에서 실시간으로 확인할 수 있어요.
      </p>
      </section>
      <div className="-translate-x-1/2 fixed bottom-0 left-1/2 w-full max-w-[430px] flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button label="메이트 더 찾아보기" variant="skyblue" onClick={() => navigate(-1)} />
        <Button label="매칭 현황 보기" onClick={() => navigate(ROUTES.MATCH)} />
      </div>
    </div>
  );
};

export default SentView;
