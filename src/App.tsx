import queryClient from '@libs/query-client';
import { router } from '@routes/Router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
<<<<<<< HEAD
      <ReactQueryDevtools initialIsOpen={false} />  
=======
      <ReactQueryDevtools initialIsOpen={false} />
      <div>
			메잇볼
      <Icon name="ic-home-filled" width={40} height={40} className="text-main-700" />
      <Icon name="ic-home-filled" size={20} className="text-main-700" />
      <Icon name="ic-home-filled" rotate={90} className="text-gray-500" />

		</div>
>>>>>>> 37aa21a (chore: 빌드 에러 해결(#20))
    </QueryClientProvider>
  );
};

export default App;
