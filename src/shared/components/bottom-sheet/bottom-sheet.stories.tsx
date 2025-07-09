import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

const Template = (args: React.ComponentProps<typeof BottomSheet>) => {
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
          <p className="mb-2 font-bold text-lg">여기에 원하는 내용을 넣을 수 있어요.</p>
          <p className="text-gray-600 text-sm">선택 UI, 경고, 캘린더 등 다양한 UI 가능</p>
        </div>
      </BottomSheet>
    </>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    showIndicator: true,
  },
};

export const NoIndicator: Story = {
  render: (args) => <Template {...args} />,
  args: {
    showIndicator: false,
  },
};

export const Rounded2xl: Story = {
  render: (args) => <Template {...args} />,
  args: {
    rounded: '2xl',
  },
};

export const CustomPadding: Story = {
  render: (args) => <Template {...args} />,
  args: {
    padding: 'pt-6 pb-4 px-6',
  },
};

export const NoOverlay: Story = {
  render: (args) => <Template {...args} />,
  args: {
    showOverlay: false,
  },
};
