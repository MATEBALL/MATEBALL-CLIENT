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

export const Logo: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-[2rem]">
      <div className="flex flex-col items-center p-[rem]">
        <p className="head_20_sb mb-2 text-gray-black">LogoSymbol</p>
        <img src="/svgs/favicon.svg" alt="favicon" width={150} height={150} />
      </div>

      <div className="flex flex-col items-center">
        <p className="head_20_sb mb-2 text-gray-black">Logo</p>
        <Icon name="logo" width={15} height={7} className="bg-gray-black p-[1rem]" />
      </div>

      <div className="flex flex-col items-center">
        <p className="head_20_sb mb-2 text-gray-black">LogoFooter</p>
        <Icon name="logo-gray" width={15} height={7} className="p-[1rem]" />
      </div>
    </div>
  ),
};
