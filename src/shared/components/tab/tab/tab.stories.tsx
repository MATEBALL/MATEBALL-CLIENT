import TabList from '@components/tab/tab/tab-list';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof TabList> = {
  title: 'common/tab/TabList',
  component: TabList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**TabList 컴포넌트**

홈/그룹 모드에 따라 탭 간 간격 및 색상이 달라지는 수평 탭 컴포넌트입니다.  
내부 상태로 현재 활성 탭을 관리하며, 각 탭은 \`TabItem\`으로 구성됩니다.

- \`colorMode='home'\`일 때 간격: \`gap-[1.2rem]\`
- \`colorMode='match\`일 때 간격: \`gap-[2.4rem]\`
- 기본 탭 목록: ['1:1', '그룹'] (컴포넌트 내부에서 고정)
- 외부 props로는 \`colorMode\`만 받습니다.
        `,
      },
    },
  },
  argTypes: {
    colorMode: {
      control: { type: 'radio' },
      options: ['home', 'match'],
      description: '탭 색상 스타일을 결정하는 모드',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabList>;

export const HomeMode: Story = {
  args: {
    colorMode: 'home',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-700">
        <Story />
      </div>
    ),
  ],
};

export const MatchMode: Story = {
  args: {
    colorMode: 'match',
  },
};
