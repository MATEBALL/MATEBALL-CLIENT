import Button from '@components/button/button/button';
import type { buttonVariants } from '@components/button/button/styles/button-variants';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { VariantProps } from 'class-variance-authority';

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;

const variantOptions: ButtonVariant[] = ['blue', 'gray', 'skyblue', 'white', 'skyblueBorder'];
const sizeOptions: ButtonSize[] = ['M', 'L', 'setting_M', 'setting_L'];

const meta: Meta<typeof Button> = {
  title: 'COMMON/Button/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Button 컴포넌트**는 버튼 색상과 크기를 조절하여 재사용 가능한 컴포넌트입니다.

---

### ✅ 필수 props
- \`label\`: 버튼 텍스트
- \`variant\`: 버튼 색상 (blue, gray, skyblue, white, skyblueBorder)  
  → 설정 안 하면 기본값: **blue**
- \`size\`: 버튼 크기 (M, L, setting_M, setting_L)  
  → 설정 안 하면 기본값: **M**

### 🛠 선택적 props
- \`icon\`: 아이콘 이름 (예: \`check\`, \`plus\`)
- \`iconSize\`: 아이콘 크기 (예: \`1.6\`,)
- \`disabled\`: 버튼 비활성화 여부
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
      options: variantOptions,
      description: 'Button variant/color',
    },
    size: {
      control: 'inline-radio',
      options: sizeOptions,
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
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
    icon: { control: 'text', description: 'Optional icon name' },
    iconSize: { control: 'text', description: 'Optional icon size (e.g., "20px")' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TestButton: Story = {
  args: {
    label: 'Button',
    variant: 'blue',
    size: 'M',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="min-w-[10rem]">Blue:</span>
        {sizeOptions.map((size) => (
          <Button key={size} label={size} variant="blue" size={size} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="min-w-[10rem]">Gray:</span>
        {sizeOptions.map((size) => (
          <Button key={size} label={size} variant="gray" size={size} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="min-w-[10rem]">SkyBlue:</span>
        {sizeOptions.map((size) => (
          <Button key={size} label={size} variant="skyblue" size={size} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="min-w-[10rem]">White:</span>
        {sizeOptions.map((size) => (
          <Button key={size} label={size} variant="white" size={size} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="min-w-[10rem]">SkyBlueBorder:</span>
        {sizeOptions.map((size) => (
          <Button key={size} label={size} variant="skyblueBorder" size={size} />
        ))}
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
