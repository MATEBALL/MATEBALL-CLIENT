import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof BottomSheet> = {
  title: 'COMMON/BottomSheet',
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
      <div>
          <p className="font-bold text-lg">여기에 원하는 내용을 넣을 수 있어요.</p>
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

export const RequestWarning: Story = {
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
            <div className="pt-[3.2rem] gap-[0.4rem] max-w-[27.2rem] flex flex-col justify-start items-center text-center">
              <div className="self-stretch gap-[1.6rem] flex flex-col items-center">
                <div className="title_24_sb text-gray-black text-center">
                  잠깐!
                </div>
                <div className="body_16_b text-gray-900 text-center">
                  그룹 매칭은 최대 2건까지 신청할 수 있어요.
                </div>
              </div>
              <div className="body_16_m text-gray-800 text-center">
                단, 하루에 한 경기만 매칭이 성사되며 같은 날짜의 중복 매칭은 불가능해요!
              </div>
            </div>

            <div className="self-stretch p-4 inline-flex justify-start items-center gap-2">
              <button
                type="button"
                className="flex-1 px-4 py-3 bg-main-color-main-200 rounded-xl flex justify-center items-center"
              >
                <span className="text-lg font-semibold text-main-color-main-900 leading-relaxed">
                  다음에 할래요
                </span>
              </button>
              <button
                type="button"
                className="flex-1 px-2 py-3 bg-main-color-main-900 rounded-xl flex justify-center items-center gap-2"
              >
                <span className="text-lg font-semibold text-gray-color-gray-white leading-relaxed">
                  요청할래요
                </span>
              </button>
            </div>
        </BottomSheet>
      </>
    );
  },
  args: {
    showIndicator: false,
    padding: 'p-0',
  },
};

export const CustomPadding: Story = {
  render: (args) => <Template {...args} />,
  args: {
    padding: 'pt-6 pb-4 px-6',
  },
};

