import queryClient from '@libs/query-client';
import { router } from '@routes/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom';
=======
import queryClient from '@libs/query-client';


>>>>>>> 0c1f69d (chore: 확인용 코드 삭제(#10))

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <div>
			메잇볼
      <Icon name="ic-home-filled" width={40} height={40} className="text-main-700" />
      <Icon name="ic-home-filled" size={20} className="text-main-700" />
      <Icon name="ic-home-filled" rotate={90} className="text-gray-500" />

		</div>
>>>>>>> 37aa21a (chore: 빌드 에러 해결(#20))
=======
>>>>>>> 0c1f69d (chore: 확인용 코드 삭제(#10))
    </QueryClientProvider>
  );
};

export default App;