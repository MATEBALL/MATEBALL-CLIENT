import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheetModal = ({ isOpen, onClose }: BottomSheetModalProps) => {
  return (
    <BottomSheet showIndicator={false} isOpen={isOpen} onClose={onClose}>
      <div className="mx-auto flex flex-col items-center justify-center gap-[0.4rem] px-[5rem] pt-[3.2rem]">
        <div className="flex flex-col items-center gap-[1.6rem] self-stretch text-center">
          <div className="title_24_sb text-center text-gray-black">잠깐!</div>
          <div className="body_16_b text-center text-gray-900">
            그룹 매칭은 최대 2건까지 신청할 수 있어요.
          </div>
        </div>
        <div className="body_16_m text-center text-gray-800">
          단, 하루에 한 경기만 매칭이 성사되며 같은 날짜의 중복 매칭은 불가능해요!
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-[0.8rem] p-[1.6rem]">
        <Button label="다음에 할래요" className="bg-main-200 text-main-900" onClick={onClose} />
        <Button
          label="요청할래요"
          onClick={() => {
            // TODO: 요청 로직 추가
            onClose();
          }}
        />
      </div>
    </BottomSheet>
  );
};

export default BottomSheetModal;
