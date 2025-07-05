import Footer from '@components/footer/footer';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Footer> = {
  title: 'layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="flex h-[40rem] items-center justify-center">
        <div className="w-[37.5rem] bg-background">
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
