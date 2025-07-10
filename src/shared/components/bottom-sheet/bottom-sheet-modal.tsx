import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';
<<<<<<< HEAD
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 9bbf753 (feat: Bottom Sheet 공통 컴포넌트 구현 (#102))

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
<<<<<<< HEAD
  subDescription: string | string[];
  isGroupMatching?: boolean;
=======
  subDescription: string;
>>>>>>> 9bbf753 (feat: Bottom Sheet 공통 컴포넌트 구현 (#102))
}

const BottomSheetModal = ({
  isOpen,
  onClose,
  description,
  subDescription,
<<<<<<< HEAD
  isGroupMatching,
}: BottomSheetModalProps) => {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    const mode = isGroupMatching ? 'group' : 'single';
    navigate(`${ROUTES.RESULT}?type=sent&mode=${mode}`);
    onClose();
  };

=======
}: BottomSheetModalProps) => {
>>>>>>> 9bbf753 (feat: Bottom Sheet 공통 컴포넌트 구현 (#102))
  return (
    <BottomSheet showIndicator={false} isOpen={isOpen} onClose={onClose}>
      <div className="mx-auto flex-col-center gap-[0.4rem] px-[5rem] pt-[3.2rem] text-center">
        <div className="flex-col-center gap-[1.6rem] self-stretch">
          <div className="title_24_sb text-gray-black">잠깐!</div>
<<<<<<< HEAD
          <div className="body_16_b whitespace-nowrap text-gray-900">{description}</div>
        </div>
        <div className="body_16_m w-[23.2rem] text-gray-800">{subDescription}</div>
      </div>

      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button label="다음에 할래요" variant="skyblue" onClick={onClose} />
        <Button label="요청할래요" onClick={handleRequestClick} />
=======
          <div className="body_16_b text-gray-900">{description}</div>
        </div>
        <div className="body_16_m text-gray-800">{subDescription}</div>
      </div>

      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button label="다음에 할래요" className="bg-main-200 text-main-900" onClick={onClose} />
        <Button
          label="요청할래요"
          onClick={() => {
            // TODO: 요청 로직 추가
            onClose();
          }}
        />
>>>>>>> 9bbf753 (feat: Bottom Sheet 공통 컴포넌트 구현 (#102))
      </div>
    </BottomSheet>
  );
};

export default BottomSheetModal;
