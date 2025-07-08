import ButtonGame from '@components/button/button-game/button-game';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ButtonGame> = {
  title: 'COMMON/Button/ButtonGame  ',
  component: ButtonGame,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Button Game 컴포넌트**는 경기 버튼으로 버튼 label과 색상을 조절하여 재사용 가능한 컴포넌트입니다.

---

### ✅ 필수 props
- \`variant\`: 버튼 색상
- \`gameTime\`: 버튼 시간
- \`stadium\`: 버튼 위치
- \`awayTeam\`: 버튼 위치
- \`homeTeam\`: 버튼 위치

### 🛠 선택적 props
- \`onClick\`: 버튼 클릭 이벤트
- \`ariaLabel\`: 접근성 라벨
- \`className\`: 추가 클래스 적용
      `,
      },
    },
  },
  argTypes: {
    gameTime: {
      control: 'text',
      description: 'Button game time',
    },
    stadium: {
      control: 'text',
      description: 'Button stadium',
    },
    awayTeam: {
      control: 'text',
      description: 'Button away team',
    },
    homeTeam: {
      control: 'text',
      description: 'Button home team',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[10rem] w-[50rem] flex-row-center bg-gray-500">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ButtonGame>;

export const TestButtonGame: Story = {
  args: {
    gameTime: '11:00',
    stadium: '경기장',
    awayTeam: '어웨이팀',
    homeTeam: '홈팀',
  },
};
