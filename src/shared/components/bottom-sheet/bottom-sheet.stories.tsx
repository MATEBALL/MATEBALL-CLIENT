import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
import BottomSheetModal from '@components/bottom-sheet/bottom-sheet-modal';
import Button from '@components/button/button/button';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof BottomSheet> = {
  title: 'COMMON/BottomSheet',
  component: BottomSheet,
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: (args) => {
    const { isOpen, open, close } = useBottomSheet();

    return (
      <>
        <button
          type="button"
          onClick={open}
          className="fixed top-4 left-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          바텀시트 열기
        </button>
        <BottomSheet {...args} isOpen={isOpen} onClose={close}>
          <div className="p-4 text-center text-gray-900">
            <p className="font-bold text-lg">여기에 원하는 내용을 넣을 수 있어요.</p>
            <p className="text-sm text-gray-600">선택 UI, 경고, 캘린더 등 다양한 UI 가능</p>
          </div>
        </BottomSheet>
      </>
    );
  },
  args: {
    showIndicator: true,
  },
};

export const RequestWarning: Story = {
  render: () => {
    const { isOpen, open, close } = useBottomSheet();

    return (
      <div className="fixed top-4 left-4 justify-center">
        <Button label="바텀시트 열기" onClick={open} />
        <BottomSheetModal isOpen={isOpen} onClose={close} />
      </div>
    );
  },
};
