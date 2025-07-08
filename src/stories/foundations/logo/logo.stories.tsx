import Icon from '@components/icon/icon';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundations/Logo',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

interface LogoArgs {
  width?: number;
  height?: number;
  backgroundColor?: string;
}

export const Logo: Story = {
  args: {
    width: 15,
    height: 15,
  },
  // TODO: 로고 아이콘 적용
  render: (args: LogoArgs) => (
    <div className="flex flex-col items-center space-y-16 p-16">
      <div className="flex flex-col items-center">
        <p className="head_20_sb mb-2 text-gray-black">LogoSymbol</p>
        <Icon name="ic-baseball" {...args} />
      </div>

      <div className="flex flex-col items-center">
        <p className="head_20_sb mb-2 text-gray-black">LogoFooter</p>
        <Icon name="ic-baseball" {...args} />
      </div>

      <div className="flex flex-col items-center">
        <p className="head_20_sb mb-2 text-gray-black">Logo</p>
        <Icon name="ic-baseball" {...args} />
      </div>
    </div>
  ),
};
