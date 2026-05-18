import BottomNavigation from '@components/bottom-navigation/bottom-navigation';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { NO_HEADER_PATHS, SHOW_BOTTOM_NAVIGATE_PATHS } from '@constants/header';
import useAnalyticsPageView from '@hooks/use-analytics-page-view';
import { cn } from '@libs/cn';
import Loading from '@pages/loading/loading';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  useAnalyticsPageView();

  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const resultType = searchParams.get('type');

  const isResult = Boolean(matchPath({ path: ROUTES.RESULT(), end: true }, pathname));
  const isFail =
    matchPath({ path: '/result/:id', end: true }, pathname) && searchParams.get('type') === 'fail';

  const shouldHideResultHeader = isResult && resultType !== 'received';

  const showHeader =
    !NO_HEADER_PATHS.some((path) => matchPath({ path, end: true }, pathname)) &&
    !shouldHideResultHeader;

  const showBottomNav = SHOW_BOTTOM_NAVIGATE_PATHS.includes(pathname);

  const [isLoading, setIsLoading] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');

  return (
    <div className={cn('h-full flex-col', isFail && 'bg-gray-black')}>
      {showHeader && <Header headerTitle={headerTitle} />}
      <div className="scrollbar-hide mt-[-0.1rem] flex-grow flex-col overflow-auto">
        <main className="flex-1">
          <Outlet context={{ setIsLoading, setHeaderTitle }} />
        </main>
        {pathname === ROUTES.HOME && <Footer />}
      </div>
      {showBottomNav && <BottomNavigation />}

      {isLoading && <Loading />}
    </div>
  );
};

export default Layout;
