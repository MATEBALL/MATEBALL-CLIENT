import ChipInfoList from '@components/chip/chip-info/chip-info-list';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ChipInfoList> = {
  title: 'COMMON/Chip/ChipInfoList',
  component: ChipInfoList,
  tags: ['autodocs'],
  args: {
    awayTeam: 'LG',
    homeTeam: '두산',
    location: '잠실경기장',
    date: '7월 10일',
  },
  parameters: {
    docs: {
      description: {
        component: `
*ChipInfoList 컴포넌트*

경기 정보를 작은 Chip UI 형태로 나열한 정보 바입니다.

- \`awayTeam\`과 \`homeTeam\`은 "VS" 형식으로 출력됩니다.
- \`location\`은 장소 정보, \`date\`는 경기 일시로 사용됩니다.
- 각 정보는 아이콘과 함께 Chip 형태로 구성됩니다.

💡 내부적으로 \`ChipInfoItem\` 컴포넌트를 3개 조합하여 보여줍니다.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipInfoList>;

export const Default: Story = {
  args: {
    awayTeam: 'LG',
    homeTeam: '두산',
    location: '잠실경기장',
    date: '7월 10일',
  },
};
