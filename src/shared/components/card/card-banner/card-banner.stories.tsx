import CardBanner from '@components/card/card-banner/card-banner';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CardBanner> = {
  title: 'COMMON/Card/CardBanner',
  component: CardBanner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**CardBanner 컴포넌트**는 홈에서 사용되는 광고 배너 컴포넌트입니다.

---

### ✅ 필수 props
- \`text\`: 메인 텍스트

### 🛠 선택적 props
- \`subText\`: 작은 글씨
      `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardBanner>;

export const Default: Story = {
  args: {
    subText: '경기일 선택하고',
    text: '나랑 딱 맞는 직관 메이트 찾자!',
  },
};
