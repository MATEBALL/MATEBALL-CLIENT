import Footer from '@components/footer/footer';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Footer> = {
  title: 'layout/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: `
### Footer 컴포넌트

- 레이아웃과 정보 제공용 영역으로 활용됩니다.

> 참고: 현재 MATEBALL 프로젝트에서는 Footer가 홈 페이지에만 렌더링됩니다.
      `,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div className="flex h-[40rem] items-center justify-center">
          <div className="w-[37.5rem] bg-background">
            <Story />
          </div>
        </div>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
