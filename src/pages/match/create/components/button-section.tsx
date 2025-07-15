import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { MAX_CREATE_DESCRIPTION } from '@pages/match/constants/matching';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

interface ButtonSectionProps {
  matchType: 'single' | 'group';
}

const ButtonSection = ({ matchType }: ButtonSectionProps) => {
  const navigate = useNavigate();

  const handleGoToMate = () => {
    navigate(ROUTES.HOME);
  };

  const handleGoToMatch = () => {
    navigate(ROUTES.MATCH);
  };

  return (
    <div className="w-full">
      <section className="flex-row-center gap-[0.8rem]">
        <Icon name="caution" size={1.8} className="text-gray-600" />
        <p className="cap_12_m text-gray-600">{MAX_CREATE_DESCRIPTION[matchType]}</p>
      </section>
      <section className="flex-row-between gap-[0.8rem] py-[1.6rem]">
        <Button
          label="메이트 더 찾아보기"
          size="M"
          variant="skyblue"
          className="w-full"
          onClick={handleGoToMate}
        />
        <Button
          label="매칭 현황 보기"
          size="M"
          variant="blue"
          className="w-full"
          onClick={handleGoToMatch}
        />
      </section>
    </div>
  );
};

export default ButtonSection;
