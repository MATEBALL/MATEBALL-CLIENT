import ChipInfoItem from '@components/chip/chip-info/chip-info-item';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ChipInfoItem> = {
  title: 'COMMON/Chip/ChipInfoItem',
  component: ChipInfoItem,
  tags: ['autodocs'],
  args: {
    iconName: 'ic-check-filled',
    text: '요청 수락 완료',
  },
  parameters: {
    docs: {
      description: {
        component: `
*ChipInfoItem 컴포넌트*

작은 아이콘과 함께 정보를 표시하는 Chip 형태의 요소입니다.

- \`iconName\`에 아이콘 이름을 문자열로 전달합니다.
- \`text\`는 표시할 내용을 의미합니다.
- 아이콘과 텍스트가 가로 정렬되어 있으며, 텍스트 크기는 cap_12_m입니다.

💡 아이콘 사이즈는 고정 (1.6rem x 1.6rem)입니다.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipInfoItem>;

export const Default: Story = {
  args: {
    iconName: 'ic-baseball',
    text: '한화 vs 두산',
  },
};

export const Location: Story = {
  args: {
    iconName: 'ic-location',
    text: '잠실경기장',
  },
};

export const Time: Story = {
  args: {
    iconName: 'ic-calendar-16',
    text: '7월 17일',
  },
};
