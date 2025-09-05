import { LOTTIE_PATH } from '@constants/lotties';
import { Lottie } from '@toss/lottie';

const Loading = () => {
  return (
    <div className="h-full flex-col-center gap-[4rem]">
      <Lottie src={LOTTIE_PATH.LOADING} width="16rem" height="16rem" loop={true} />
      <div className="flex-col-center">
        <h1 className="title_24_sb">잠시만 기다려 주세요.</h1>
        <p className="cap_14_m text-gray-600">해당 페이지로 이동 중입니다.</p>
      </div>
    </div>
  );
};

export default Loading;
