import ErrorView from '@pages/error/error-view';
import Loading from '@pages/loading/loading';
import { type ReactNode, Suspense } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
}

// TODO: 에러 정보 (error.message 등), 토스트 메시지 등 활용
const GlobalFallback = ({ error }: FallbackProps) => {
  return <ErrorView message={error.message} />;
};

export const GlobalErrorBoundary = ({ children }: GlobalErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={GlobalFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
