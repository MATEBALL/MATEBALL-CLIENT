import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import BottomSheetModal from '@components/bottom-sheet/bottom-sheet-modal';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
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
      <div className="fixed top-4 left-4 justify-center">
        <Button label="바텀시트 열기" onClick={open} />
        <BottomSheet {...args} isOpen={isOpen} onClose={close}>
          <div className="text-center text-gray-900">
            <p className="mb-2 font-bold text-lg">테스트용 BottomSheet</p>
            <p className="text-gray-600 text-sm">버튼을 눌러 닫을 수 있습니다.</p>
            <div className="p-[1.6rem]">
              <button type="button" className="mt-4 rounded bg-gray-200 px-4 py-2 text-sm">
                닫기
              </button>
            </div>
          </div>
        </BottomSheet>
      </div>
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
