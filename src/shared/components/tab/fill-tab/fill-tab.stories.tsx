import type { Meta, StoryObj } from '@storybook/react-vite';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';

const meta: Meta<typeof FillTabList> = {
  title: 'common/tab/FillTabList',
  component: FillTabList,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: { type: 'object' },
      description: '탭 타이틀 목록',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FillTabList>;

export const Default: Story = {
  args: {
    tabs: ['전체', '공지', '채팅'],
  },
};
