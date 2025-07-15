import queryClient from '@libs/query-client';
import { GlobalErrorBoundary } from '@routes/global-error-boundary.tsx';
import { router } from '@routes/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <div style={{ fontSize: '16px' }}>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
};

export default App;
