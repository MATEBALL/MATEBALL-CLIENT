import { authQueries } from '@apis/auth/auth';
import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import { ROUTES } from '@routes/routes-config';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

const createQueryClient = (userData = { nickname: true, condition: true }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  });

  client.setQueryData(authQueries.USER_STATUS().queryKey, userData);

  return client;
};

const meta: Meta<typeof BottomNavigation> = {
  title: 'COMMON/BottomNavigation',
  component: BottomNavigation,
  decorators: [
    (Story, context) => {
      const userData = context.parameters?.userData || { nickname: true, condition: true };
      const queryClient = createQueryClient(userData);

      return (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={[ROUTES.HOME]}>
            <div className="w-[37.5rem] bg-gray-100">
              <Story />
            </div>
          </MemoryRouter>
        </QueryClientProvider>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component: `
**BottomNavigation 컴포넌트**

모바일 환경에서 화면 하단에 고정되어 주요 탭을 제공하는 네비게이션 UI입니다.  
아이콘은 현재 경로(pathname)에 따라 filled 또는 lined 상태로 동적으로 바뀌며, 클릭 시 해당 경로로 이동합니다.

- \`icon.name\`은 현재 경로에 따라 상태가 전환됩니다.
- 내부 라우팅을 위해 \`useLocation\`, \`useNavigate\`를 사용합니다.

      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  render: () => <BottomNavigation />,
  parameters: {
    docs: {
      description: {
        story: '기본 상태: 인증된 사용자, 매칭 완료 (모든 탭 활성화)',
      },
    },
  },


};


