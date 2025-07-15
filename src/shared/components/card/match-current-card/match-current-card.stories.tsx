import MatchCurrentCard from '@components/card/match-current-card/match-current-card';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MatchCurrentCard> = {
  title: 'COMMON/Card/MatchCurrentCard',
  component: MatchCurrentCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**MatchCurrentCard 컴포넌트**는 매칭 현황을 확인하기 위한 컴포넌트 입니다.

---

### ✅ 필수 props
- \`count\`: 매칭된 인원

서버에서 받아온 데이터에서 count를 받아와 props로 넣어줍니다.
      `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MatchCurrentCard>;

export const Default: Story = {
  args: {
    count: 3,
  },
};
