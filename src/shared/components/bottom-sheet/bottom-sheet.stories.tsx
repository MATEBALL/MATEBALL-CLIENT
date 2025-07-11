import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import BottomSheetModal from '@components/bottom-sheet/bottom-sheet-modal';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import useBottomSheet from '@components/bottom-sheet/hooks/use-bottom-sheet';
import Button from '@components/button/button/button';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof BottomSheet> = {
  title: 'COMMON/BottomSheet',
  component: BottomSheet,
  parameters: {
    docs: {
      description: {
        component: `
### BottomSheet 컴포넌트

하단에서 부드럽게 등장하는 바텀시트 컴포넌트입니다. 포털을 사용하여 body 하단에 고정되며, 배경 dimmed와 외부 클릭 닫기 기능을 기본적으로 제공합니다.

- \`isOpen\`: 바텀시트 열림 여부
- \`onClose\`: 닫기 핸들러
- \`showIndicator\`: 상단 인디케이터 렌더링 여부
- \`gap\`: 콘텐츠 스타일 조정

\`children\`에는 자유롭게 콘텐츠를 삽입할 수 있으며, scrollable 영역/버튼 영역 구분도 가능합니다.
        `,
      },
    },
  },
  tags: ['autodocs'],
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
              <button
                type="button"
                className="mt-4 cursor-pointer rounded bg-gray-200 px-4 py-2 text-sm"
                onClick={close}
              >
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
        <BottomSheetModal
          isOpen={isOpen}
          onClose={close}
          description="그룹 매칭은 최대 2건까지 신청할 수 있어요."
          subDescription="단, 하루에 한 경기만 매칭이 성사되며 같은 날짜의 중복 매칭은 불가능해요!"
        />
      </div>
    );
  },
};

export const GameMatch: Story = {
  render: () => {
    const { isOpen, open, close } = useBottomSheet();

    const mockGameDatas = [
      { id: 1, awayTeam: 'LG', homeTeam: '두산', gameTime: '18:30', stadium: '잠실' },
      { id: 2, awayTeam: 'SSG', homeTeam: 'NC', gameTime: '18:30', stadium: '문학' },
      { id: 3, awayTeam: '한화', homeTeam: '키움', gameTime: '18:30', stadium: '대전' },
      { id: 4, awayTeam: '롯데', homeTeam: 'KT', gameTime: '18:30', stadium: '사직' },
      { id: 5, awayTeam: '삼성', homeTeam: 'KIA', gameTime: '18:30', stadium: '대구' },
    ];

    return (
      <div className="fixed top-4 left-4 justify-center">
        <Button className="w-full" label="게임 매치 바텀시트 열기" onClick={open} />
        <GameMatchBottomSheet
          isOpen={isOpen}
          onClose={close}
          date="2025/07/17"
          gameSchedule={mockGameDatas}
        />
      </div>
    );
  },
};
