import { ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import RootLayout from './layouts/RootLayout';
import { LandingPage } from './pages';
import LoginWrapper from './components/auth/LoginWrapper';
import SignupWrapper from './components/auth/SignupWrapper';
import { AuthProvider } from './context/AuthContext';
import LightTheme from './themes';
import {
  open,
  useCustomOpen,
  UpdateGalleryContextProvider,
  StatsContextProvider,
} from './context';
import StadiumProfile from './pages/StadiumProfile';
import StadiumsPage from './pages/Stadiums';
import MatchesPage from './components/matchesPage/Match';

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
    children: [
      {
        path: 'stadiums',
        element: <StadiumsPage />,
      },
      {
        path: 'matches',
        element: <MatchesPage />,
      },
    ],
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
            <UpdateGalleryContextProvider>
              <RouterProvider router={router} />
            </UpdateGalleryContextProvider>
          </StatsContextProvider>
        </open.Provider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
