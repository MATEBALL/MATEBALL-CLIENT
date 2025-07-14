import { type ReactNode, Suspense } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import Loading from '@pages/loading/loading';
import ErrorView from '@pages/error/error-view';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
}

const GlobalFallback = ({ error }: FallbackProps) => {
  console.error('Global Error:', error);
  return <ErrorView />;
};

export const GlobalErrorBoundary = ({ children }: GlobalErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={GlobalFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
