import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';

interface ProfileImageBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: () => void;
  onDeleteImage: () => void;
  canDelete: boolean;
  isDeleting?: boolean;
}

const ProfileImageBottomSheet = ({
  isOpen,
  onClose,
  onSelectImage,
  onDeleteImage,
  canDelete,
  isDeleting = false,
}: ProfileImageBottomSheetProps) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex-col gap-[0.8rem] px-[1.6rem]">
        <div className="mt-[1.6rem] rounded-[12px] bg-gray-100">
          <button
            type="button"
            className="body_16_m w-full cursor-pointer px-[2rem] py-[1.2rem] text-gray-900"
            onClick={onSelectImage}
          >
            앨범에서 선택
          </button>

          <div className="h-[0.1rem] bg-gray-300" />

          <button
            type="button"
            className="body_16_m w-full cursor-pointer px-[2rem] py-[1.2rem] text-state-error"
            onClick={onDeleteImage}
            disabled={!canDelete || isDeleting}
          >
            프로필 사진 삭제
          </button>
        </div>

        <div className="py-[1.6rem]">
          <Button
            type="button"
            label="닫기"
            onClick={onClose}
            className="subhead_18_sb text-gray-white"
          />
        </div>
      </div>
    </BottomSheet>
  );
};

export default ProfileImageBottomSheet;
