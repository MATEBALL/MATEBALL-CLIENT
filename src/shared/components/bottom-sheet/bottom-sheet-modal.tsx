import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  subDescription: string | string[];
  isGroupMatching?: boolean;
}

const BottomSheetModal = ({
  isOpen,
  onClose,
  description,
  subDescription,
  isGroupMatching,
}: BottomSheetModalProps) => {
  const navigate = useNavigate();

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
        <Button label="다음에 할래요" variant="skyblue" onClick={onClose} />
        <Button
          label="요청할래요"
          onClick={() => {
            const mode = isGroupMatching ? 'group' : 'single';
            navigate(`${ROUTES.RESULT}?type=sent&mode=${mode}`);
            onClose();
          }}
        />
      </div>
    </BottomSheet>
  );
};

export default BottomSheetModal;
