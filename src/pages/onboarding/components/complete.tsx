import { LOTTIE_PATH } from '@constants/lotties';
import { Lottie } from '@toss/lottie';

const Complete = () => {
  return (
    <div className="flex-1 flex-col-center gap-[4rem]">
      <p className="title_24_sb text-center text-gray-black">
        매칭 조건 설정이 끝났어요!
        <br />
        메이트를 찾아볼까요?
      </p>

      <Lottie src={LOTTIE_PATH.AGREE} loop={true} width="16rem" height="16rem" />
    </div>
  );
};

export default Complete;
