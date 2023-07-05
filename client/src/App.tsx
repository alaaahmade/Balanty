import { ReactElement } from 'react';
<<<<<<< HEAD
// import { ThemeProvider } from '@emotion/react';
import RootLayout from './layouts/RootLayout';
import { LandingPage } from './pages';
// import LightTheme from './themes';
import { open, useCustomOpen } from './context';
import { StatsContextProvider } from './context/CreateMatch';
import StadiumProfile from './pages/StadiumProfile';
import MatchesPage from './components/matchesPage/Match';
=======
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
>>>>>>> 97fd6654736af41a8c19b4af896b03def098141e

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
<<<<<<< HEAD
        path: 'matches',
        element: <MatchesPage />,
=======
        path: 'stadiums',
        element: <StadiumsPage />,
>>>>>>> 97fd6654736af41a8c19b4af896b03def098141e
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
<<<<<<< HEAD
    <open.Provider value={useCustomOpen()}>
      <StatsContextProvider>
        <RouterProvider router={router} />
      </StatsContextProvider>
    </open.Provider>
=======
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
>>>>>>> 97fd6654736af41a8c19b4af896b03def098141e
  );
};

export default App;
