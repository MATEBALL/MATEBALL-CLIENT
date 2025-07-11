import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

const MatchingSuccessView = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex-col-between">
      <div className="flex-col-center gap-[4rem] rounded-full px-[1.6rem] pt-[4rem] pb-[8rem]">
        <h2 className="title_24_sb text-center">매칭이 성사되었어요!</h2>
        <div className="relative">
          <div className="matching-success-background" />
          <div className="matching-lottie-gradient" />
          <Lottie src={LOTTIE_PATH.SUCCESS} loop />
        </div>
        <p className="body_16_m text-center text-gray-600">
          이제 매칭된 메이트와 소통할 수 있어요! <br />
          아래 버튼을 눌러 채팅방으로 입장해주세요.
        </p>
      </div>
      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button label="채팅방 입장하기" className="w-full" onClick={() => navigate(ROUTES.MATCH)} />
      </div>
    </div>
  );
};

export default MatchingSuccessView;
