import ChipState from '@components/chip/chip-state/chip-state';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ChipState> = {
  title: 'common/Chip/ChipState',
  component: ChipState,
  tags: ['autodocs'],
  argTypes: {
    colorType: {
      control: { type: 'radio' },
<<<<<<< HEAD
      options: ['active', 'inactive'],
=======
      options: ['main', 'gray'],
>>>>>>> 67606d8 (fix: chip state (#80))
    },
  },

  parameters: {
    docs: {
      description: {
        component: `
*ChipState 컴포넌트*
ChipState 컴포넌트는 상태를 나타내는 태그(Chip)입니다.

- 기본 텍스트(label) 또는 매칭률(rate)을 표시할 수 있습니다.
<<<<<<< HEAD
- colorType은 'active' 또는 'inactive' 중 선택할 수 있으며 스타일이 달라집니다.
=======
- colorType은 'main' 또는 'gray' 중 선택할 수 있으며 스타일이 달라집니다.
>>>>>>> 67606d8 (fix: chip state (#80))
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
    status: '요청 대기 중',
  },
};

export const MainColor: Story = {
  args: {
<<<<<<< HEAD
    status: '승인 완료',
=======
    label: '승인 완료',
<<<<<<< HEAD
>>>>>>> 8c4cd43 (fix: chip state (#80))
    colorType: 'active',
=======
    colorType: 'main',
>>>>>>> 67606d8 (fix: chip state (#80))
  },
};

export const Matching: Story = {
  args: {
    rate: 85,
<<<<<<< HEAD
    colorType: 'active',
=======
    colorType: 'main',
>>>>>>> 67606d8 (fix: chip state (#80))
  },
};
