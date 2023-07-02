import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ReactElement, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import RootLayout from './layouts/RootLayout';
import { LandingPage } from './pages';
import LoginWrapper from './components/auth/LoginWrapper';
import SignupWrapper from './components/auth/SignupWrapper';
import LightTheme from './themes';
import { StatsContextProvider } from './context/CreateMatch';
import StadiumProfile from './pages/StadiumProfile';
import { AuthContext, open, useCustomOpen } from './context';
import { useAuth, useUser } from './hooks';
import { AuthProvider } from './context/AuthContext';

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
  {
    path: '/profile',
    element: <RootLayout />,
    children: [{ path: 'stadium/:id', element: <StadiumProfile /> }],
  },
  { path: '*', element: <h1>error</h1> },
]);
const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      <AuthProvider>
        <open.Provider value={useCustomOpen()}>
          <StatsContextProvider>
            <RouterProvider router={router} />
          </StatsContextProvider>
        </open.Provider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
