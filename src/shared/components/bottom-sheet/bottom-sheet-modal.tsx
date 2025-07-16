import { matchMutations } from '@apis/match/match-mutations';
import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';
import { ROUTES } from '@routes/routes-config';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { showErrorToast } from '@/shared/utils/show-error-toast';

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  subDescription: string | string[];
  isGroupMatching?: boolean;
  matchId: number;
}

const BottomSheetModal = ({
  isOpen,
  onClose,
  description,
  subDescription,
  isGroupMatching,
  matchId,
}: BottomSheetModalProps) => {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    requestMatch(matchId, {
      onSuccess: () => {
        const mode = isGroupMatching ? 'group' : 'single';
        navigate(`${ROUTES.RESULT}?type=sent&mode=${mode}`);
        onClose();
      },
      onError: (error: unknown) => {
        const axiosError = error as AxiosError;
        const status = axiosError?.response?.status;

        if (status === 429) {
          showErrorToast('요청 및 생성할 수 있는 매칭 개수를 초과했어요.', { bottom: '5.3rem' });
        } else if (status === 400) {
          showErrorToast('같은 날짜에 중복 매칭은 불가능해요.', { bottom: '5.3rem' });
        }
      },
    });
  };

  const { mutate: requestMatch } = useMutation(matchMutations.MATCH_REQUEST());

  return (
    <BottomSheet showIndicator={false} isOpen={isOpen} onClose={onClose}>
      <div className="mx-auto flex-col-center gap-[0.4rem] px-[5rem] pt-[3.2rem] text-center">
        <div className="flex-col-center gap-[1.6rem] self-stretch">
          <div className="title_24_sb text-gray-black">잠깐!</div>
          <div className="body_16_b whitespace-nowrap text-gray-900">{description}</div>
        </div>
        <div className="body_16_m w-[23.2rem] text-gray-800">{subDescription}</div>
      </div>

      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          label="다음에 할래요"
          variant="skyblue"
          onClick={() => {
            navigate(ROUTES.HOME);
          }}
        />
        <Button label="요청할래요" onClick={handleRequestClick} />
      </div>
    </BottomSheet>
  );
};

export default BottomSheetModal;
