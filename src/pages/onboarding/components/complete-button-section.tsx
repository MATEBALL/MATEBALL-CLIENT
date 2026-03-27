import Button from '@components/button/button/button';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

const CompleteButtonSection = () => {
  const navigate = useNavigate();

  const handleGoToMate = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="w-full">
      <section className="w-full flex-row-between gap-[0.8rem] p-[1.6rem]">
        <Button
          label="메이트 더 찾아보기"
          size="M"
          variant="skyblue"
          className="w-full"
          onClick={handleGoToMate}
        />
        <Button
          label="만들기"
          size="M"
          variant="blue"
          className="w-full"
          onClick={handleGoToMate}
        />
      </section>
    </div>
  );
};

export default CompleteButtonSection;
