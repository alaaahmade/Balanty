import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { LandingPage } from './pages';
import LoginWrapper from './components/auth/LoginWrapper';
import SignupWrapper from './components/auth/SignupWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/player/login', element: <LoginWrapper /> },
      { path: '/stadium/login', element: <LoginWrapper /> },
      { path: '/player/signup', element: <SignupWrapper /> },
      { path: '/stadium/signup', element: <SignupWrapper /> },
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
