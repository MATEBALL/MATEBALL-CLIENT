import Button from '@components/button/button';
import type { buttonVariants } from '@components/button/styles/button-variants';
import type { Meta, StoryObj } from '@storybook/react';
import type { VariantProps } from 'class-variance-authority';

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;

const variantOptions: ButtonVariant[] = ['blue', 'gray', 'skyblue', 'white', 'skyblueBorder'];
const sizeOptions: ButtonSize[] = ['M', 'L', 'setting_M', 'setting_L'];

const meta: Meta<typeof Button> = {
  title: 'COMMON/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        Button 컴포넌트는 버튼 색상과 크기를 조절하여 재사용 가능한 컴포넌트입니다.

        - 필수적 props:
         📍variant와 size 설정 안하면 기본값으로 blue, M 설정됩니다.
          - label: 버튼 텍스트
          - variant: 버튼 색상 (blue, gray, skyblue, white, skyblueBorder)
          - size: 버튼 크기 (M, L, setting_M, setting_L)

        - 선택적 props:
          - disabled: 버튼 비활성화 여부
          - onClick: 버튼 클릭 이벤트
          - ariaLabel: 버튼 접근성 라벨
          - className: 버튼 추가 클래스
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

// 모든 조합을 보여주는 스토리 추가
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
