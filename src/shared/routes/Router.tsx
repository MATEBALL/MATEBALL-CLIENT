import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import Home from '@pages/home/Home';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
]);
