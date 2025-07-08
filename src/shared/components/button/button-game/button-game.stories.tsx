import type { Meta, StoryObj } from '@storybook/react-vite';
import ButtonGame from './button-game';

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
- \`label\`: 버튼 텍스트
- \`variant\`: 버튼 색상
- \`time\`: 버튼 시간
- \`location\`: 버튼 위치

### 🛠 선택적 props
- \`onClick\`: 버튼 클릭 이벤트
- \`ariaLabel\`: 접근성 라벨
- \`className\`: 추가 클래스 적용
      `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    variant: {
      control: 'inline-radio',
      description: 'Button variant',
      options: ['blue', 'white'],
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
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
    label: '어웨이팀 VS 홈팀',
    variant: 'blue',
    time: '11:00',
    location: '경기장',
  },
};
