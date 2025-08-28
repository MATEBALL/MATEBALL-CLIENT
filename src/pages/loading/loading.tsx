import { LOTTIE_PATH } from '@constants/lotties';
import { Lottie } from '@toss/lottie';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-10 flex-col-center gap-[4rem] bg-gray-300/50">
      <Lottie src={LOTTIE_PATH.LOADING} width="8rem" height="8rem" loop={true} />
    </div>
  );
};

export default Loading;
