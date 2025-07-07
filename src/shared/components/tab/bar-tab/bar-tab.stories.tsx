import type { Meta, StoryObj } from '@storybook/react-vite';
import BarTabList from '@components/tab/bar-tab/bar-tab-list';

const meta: Meta<typeof BarTabList> = {
  title: 'common/tab/BarTabList',
  component: BarTabList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**📌 BarTabList 컴포넌트**

홈/그룹 모드에 따라 탭 간 간격 및 색상이 달라지는 수평 탭 컴포넌트입니다.  
내부 상태로 현재 활성 탭을 관리하며, 각 탭은 \`BarTabItem\`으로 구성됩니다.

- \`colorMode='home'\`일 때 간격: \`gap-[2.4rem]\`
- \`colorMode='group'\`일 때 간격: \`gap-[0.8rem]\`
- 기본 탭 목록: ['1:1', '그룹'] (컴포넌트 내부에서 고정)
- 외부 props로는 \`colorMode\`만 받습니다.
        `,
      },
    },
  },
  argTypes: {
    colorMode: {
      control: { type: 'radio' },
      options: ['home', 'group'],
      description: '탭 색상 스타일을 결정하는 모드',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BarTabList>;

export const HomeMode: Story = {
  args: {
    colorMode: 'home',
  },
};

export const GroupMode: Story = {
  args: {
    colorMode: 'group',
  },
};
