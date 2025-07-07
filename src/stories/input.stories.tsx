import Input from '@components/input/input';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
  },
};
