import Button from '@components/button/button/button';
import { mockMateReceive } from '@mocks/mockMatchReceiveData';
import MatchingReceiveCard from '@pages/result/components/matching-receive-card';
import { MATCHING_HEADER_MESSAGE } from '@pages/result/constants/matching-result';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

interface MatchingReceiveViewProps {
  isGroupMatching?: boolean;
}

const MatchingReceiveView = ({ isGroupMatching = true }: MatchingReceiveViewProps) => {
  const navigate = useNavigate();

  const handleReject = () => {
    navigate(`${ROUTES.RESULT}?type=fail`);
  };

  const handleAccept = () => {
    navigate(`${ROUTES.RESULT}?type=agree`);
  };

  return (
    <div className="h-full flex-col-between overflow-hidden">
      <div className="w-full flex-col-center gap-[4rem] px-[1.6rem] pt-[4rem]">
        <section className="gap-[0.8rem] text-center">
          <h1 className="title_24_sb text-gray-black">{MATCHING_HEADER_MESSAGE.description}</h1>
          <p className="body_16_m text-gray-600">
            {isGroupMatching
              ? MATCHING_HEADER_MESSAGE.group.subDescription
              : MATCHING_HEADER_MESSAGE.single.subDescription}
          </p>
        </section>
        <MatchingReceiveCard {...mockMateReceive} type="detailed" className="w-full" />
      </div>

      <section className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          size="L"
          variant="skyblue"
          className="w-full"
          label="요청 거절하기"
          onClick={handleReject}
        />
        <Button size="L" className="w-full" label="요청 수락하기" onClick={handleAccept} />
      </section>
    </div>
  );
};

export default MatchingReceiveView;
