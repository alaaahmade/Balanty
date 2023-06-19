import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Landing Page</h1>,
    children: [
      { path: '/player/login', element: <h1>player login</h1> },
      { path: '/stadium/login', element: <h1>stadium login</h1> },
      { path: '/player/signup', element: <h1>player signup</h1> },
      { path: '/stadium/signup', element: <h1>stadium signup</h1> },
    ],
  },
  {
    path: '/home',
    element: <RootLayout />,
    children: [],
  },
  { path: '*', element: <h1>error</h1> },
]);

export default router;
