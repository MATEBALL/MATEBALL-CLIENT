import { useState } from 'react';
import queryClient from '@libs/query-client';
import { router } from '@routes/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import GameMatchBottomSheet from '@components/bottom-sheet/game-match/game-match-bottom-sheet';
import { mockGameDatas } from '@mocks/mockGameData';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-[20rem] left-1/2 -translate-x-1/2 px-4 py-2 bg-main-900 text-white rounded-lg"
      >
        바텀시트 열기
      </button>

      <GameMatchBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        date="2025/07/17"
        gameSchedule={mockGameDatas}
      />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
