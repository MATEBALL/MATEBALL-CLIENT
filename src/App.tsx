
import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/Router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from '@libs/query-client';
import Icon from './shared/components/Icon';




const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      
        <Icon name="ic-home-filled"/>
      
    </QueryClientProvider>
  );

};

export default App;
