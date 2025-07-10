import ChipInfoBar from '@components/chip/chip-info/chip-info-bar';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ChipInfoBar> = {
  title: 'Common/Chip/ChipInfo',
  component: ChipInfoBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '경기 정보 요약을 아이콘과 함께 나열해주는 바 컴포넌트입니다. 경기 참여 팀명, 경기 장소, 경기 날짜를 시각적으로 표현합니다. 주로 카드나 매치 리스트 등에서 간결하게 경기 정보를 보여줄 때 사용됩니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipInfoBar>;

export const Default: Story = {
  args: {
    awayTeam: '롯데',
    homeTeam: '두산',
    location: '잠실야구장',
    date: '2024-07-08T18:30:00Z',
  },
};
