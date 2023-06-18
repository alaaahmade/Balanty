import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Landing Page</h1>,
  },
  {
    path: '/home',
    element: <h1>Home Page</h1>,
    children: [],
  },
  { path: '/player/login', element: <h1>player login</h1> },
  { path: '/stadium/login', element: <h1>stadium login</h1> },
  { path: '/player/signup', element: <h1>player signup</h1> },
  { path: '/stadium/signup', element: <h1>stadium signup</h1> },
  { path: '*', element: <h1>error</h1> },
]);

export default router;
