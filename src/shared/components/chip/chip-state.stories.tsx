import type { Meta, StoryObj } from '@storybook/react-vite';
import ChipState from '@components/chip/chip-state';

const meta: Meta<typeof ChipState> = {
  title: 'Components/Chip/ChipState',
  component: ChipState,
  tags: ['autodocs'],
  args: {
    colorType: 'gray',
  },
  parameters: {
    docs: {
      description: {
        component: `
*ChipState 컴포넌트*
ChipState 컴포넌트는 상태를 나타내는 태그(Chip)입니다.

- 기본 텍스트(label) 또는 매칭률(rate)을 표시할 수 있습니다.
- colorType은 'main' 또는 'gray' 중 선택할 수 있으며 스타일이 달라집니다.
- className을 통해 추가적인 스타일 확장이 가능합니다.

💡 rate가 주어지면 '매칭률 {rate}%' 형태로 표시되며, label은 무시됩니다.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipState>;

export const 기본_상태: Story = {
  args: {
    label: '요청 대기 중',
  },
};

export const 메인컬러_상태: Story = {
  args: {
    label: '승인 완료',
    colorType: 'main',
  },
};

export const 매칭률: Story = {
  args: {
    rate: 85,
    colorType: 'main',
  },
};
