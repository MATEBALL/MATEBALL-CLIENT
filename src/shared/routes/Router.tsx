import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@routes/routesConfig';
import Home from '@pages/home/Home';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME.path,
    element: <Home />,
  },
]);
