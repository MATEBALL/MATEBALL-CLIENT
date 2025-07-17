import { matchMutations } from '@apis/match/match-mutations';
import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';
import { MATCH_REQUEST_ERROR_MESSAGES } from '@constants/error-toast';
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
  matchId?: number;
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
  const { mutate: requestMatch } = useMutation(matchMutations.MATCH_REQUEST());

  const handleRequestClick = () => {
    if (typeof matchId !== 'number') return;

    requestMatch(matchId, {
      onSuccess: () => {
        const mode = isGroupMatching ? 'group' : 'single';
        navigate(`${ROUTES.RESULT}?type=sent&mode=${mode}`);
        onClose();
      },
      onError: (error: unknown) => {
        const axiosError = error as AxiosError;
        const status = axiosError?.response?.status;

        if (status === MATCH_REQUEST_ERROR_MESSAGES.TOO_MANY_REQUESTS.status) {
          showErrorToast(MATCH_REQUEST_ERROR_MESSAGES.TOO_MANY_REQUESTS.message, {
            bottom: '5.3rem',
          });
        } else if (status === MATCH_REQUEST_ERROR_MESSAGES.DUPLICATE_MATCH.status) {
          showErrorToast(MATCH_REQUEST_ERROR_MESSAGES.DUPLICATE_MATCH.message, {
            bottom: '5.3rem',
          });
        }
      },
    });
  };

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
