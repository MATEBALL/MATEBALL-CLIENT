import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import { ROUTES } from '@routes/routes-config';
import { Lottie } from '@toss/lottie';
import { useNavigate } from 'react-router-dom';

const ErrorView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="py-[12rem]">
      <section className="flex-col-center gap-[4rem]">
        <Lottie src={LOTTIE_PATH.ERROR} loop={true} width="16rem" height="16rem" />
        <div className="mb-[2.4rem] flex-col-center">
          <h1 className="title_24_sb mb-[0.8rem]">이런!</h1>
          <p className="cap_14_m mb-[2.4rem] text-center text-gray-600">
            이용에 불편을 드려 죄송합니다.
            <br />
            서비스 연결 중 오류가 발생했습니다.
          </p>
          <Button variant="skyblue" size="M" label="홈으로 돌아가기" onClick={handleClick} />
        </div>
      </section>
    </div>
  );
};

export default ErrorView;
