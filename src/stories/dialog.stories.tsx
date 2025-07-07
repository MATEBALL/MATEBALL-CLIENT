import Dialog from '@components/dialog/dialog';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
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
