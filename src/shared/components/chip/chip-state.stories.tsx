import ChipState from '@components/chip/chip-state/chip-state';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ChipState> = {
  title: 'common/Chip/ChipState',
  component: ChipState,
  tags: ['autodocs'],
  argTypes: {
    colorType: {
      control: { type: 'radio' },
      options: ['active', 'inactive'],
    },
  },

  parameters: {
    docs: {
      description: {
        component: `
*ChipState 컴포넌트*
ChipState 컴포넌트는 상태를 나타내는 태그(Chip)입니다.

- 기본 텍스트(label) 또는 매칭률(rate)을 표시할 수 있습니다.
- colorType은 'active' 또는 'inactive' 중 선택할 수 있으며 스타일이 달라집니다.
- className을 통해 추가적인 스타일 확장이 가능합니다.

💡 rate가 주어지면 '매칭률 {rate}%' 형태로 표시되며, label은 무시됩니다.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipState>;

export const Default: Story = {
  args: {
    label: '요청 대기 중',
  },
};

export const MainColor: Story = {
  args: {
    label: '승인 완료',
    colorType: 'active',
  },
};

export const Matching: Story = {
  args: {
    rate: 85,
    colorType: 'active',
  },
};