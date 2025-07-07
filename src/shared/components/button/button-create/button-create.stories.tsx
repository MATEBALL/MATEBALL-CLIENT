import ButtonCreate from '@components/button/button-create/button-create';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ButtonCreate> = {
  title: 'COMMON/Button/ButtonCreate',
  component: ButtonCreate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Button Create컴포넌트**는 맞춤 매칭 생성하기 버튼으로 버튼 label과 색상을 조절하여 재사용 가능한 컴포넌트입니다.

---

### ✅ 필수 props
- \`label\`: 버튼 텍스트
- \`textColor\`: 버튼 텍스트 색상

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
    textColor: {
      control: 'text',
      description: 'Button text color',
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
type Story = StoryObj<typeof ButtonCreate>;

export const TestButtonCreate: Story = {
  args: {
    label: 'Button',
    textColor: 'text-main-900',
  },
};
