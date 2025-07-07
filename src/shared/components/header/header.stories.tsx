import Header from '@components/header/header';
import { ROUTES } from '@routes/routes-config';
import type { StoryContext, StoryFn } from '@storybook/react-vite';
import clsx from 'clsx';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const { pathname = ROUTES.HOME, search = '' } = (context.args || {}) as {
        pathname?: string;
        search?: string;
      };
      const urlParams = new URLSearchParams(search);
      const isFail = urlParams.has('fail');

      const containerClass = clsx(
        'w-[37.5rem]',
        pathname === ROUTES.HOME || isFail ? 'bg-gray-black' : 'bg-gray-white ',
      );

      return (
        <MemoryRouter initialEntries={[`${pathname}${search}`]}>
          <div className={`shadow-1 ${containerClass}`}>
            <Routes>
              <Route path="*" element={Story(context.args, context)} />
            </Routes>
          </div>
        </MemoryRouter>
      );
    },
  ],
  argTypes: {
    pathname: { control: 'text', description: '현재 경로(pathname)' },
    search: { control: 'text', description: 'URL 쿼리(search)' },
  },
};

export const Home = () => <Header />;
Home.args = { pathname: ROUTES.HOME, search: '' };

export const Match = () => <Header />;
Match.args = { pathname: ROUTES.MATCH, search: '' };

export const Fail = () => <Header />;
Fail.args = { pathname: '/path', search: '?fail' };

export const DefaultBack = () => <Header />;
DefaultBack.args = { pathname: '/path', search: '' };
