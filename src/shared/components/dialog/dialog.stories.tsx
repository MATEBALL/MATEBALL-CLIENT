import Dialog from '@components/dialog/dialog';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Dialog> = {
  title: 'common/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
**Dialog 컴포넌트**

사용자에게 중요한 메시지를 전달하거나 액션을 유도하는 모달 컴포넌트입니다.  
기본적으로 안내 텍스트(\`info\`)와 하위 요소(\`children\`)를 렌더링합니다.

- \`info\`: 안내 메시지 (문자열 또는 JSX 가능)
- \`children\`: 버튼 등의 커스텀 액션 요소
- 텍스트 줄바꿈, 버튼 정렬 등은 자유롭게 커스터마이징 가능합니다.

✅ 다양한 상황에 맞게 children을 통해 액션 버튼 구성 가능
      `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    info: (
      <>
        기본 다이얼로그 입니다. <br /> 줄바꿈도 가능합니다.
      </>
    ),
    children: (
      <button
        type="button"
        className="subhead_18_sb mt-[1.5rem] inline-flex w-[16.75rem] items-center justify-center rounded-[1.2rem] bg-main-900 py-[1.2rem] text-white transition-colors "
      >
        버튼
      </button>
    ),
  },
};

export const OnlyInfo: Story = {
  args: {
    info: '내용만 있는 Dialog Component',
  },
};

export const CustomChildren: Story = {
  args: {
    info: '정말 삭제하시겠습니까?',
    children: (
      <div className="mt-[2.4rem] flex justify-center gap-[1.2rem]">
        <button type="button" className="subhead_18_sb rounded bg-gray-200 px-4 py-2">
          취소
        </button>
        <button type="button" className="subhead_18_sb rounded bg-main-800 px-4 py-2 text-white">
          삭제
        </button>
      </div>
    ),
  },
};
