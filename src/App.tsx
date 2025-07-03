
import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/Router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from '@libs/query-client';
import Icon from "./shared/components/Icon";



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <div>
			메잇볼
			<Icon name="ic-home-filled" size={32} className="text-main-700" />
		</div>
    </QueryClientProvider>
  );

};

export default App;
