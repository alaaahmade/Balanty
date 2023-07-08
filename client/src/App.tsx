import { ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import * as io from 'socket.io-client';
import RootLayout from './layouts/RootLayout';
import { LandingPage } from './pages';
import MatchRoomPage from './pages/MatchRoomPage';
import LoginWrapper from './components/auth/LoginWrapper';
import SignupWrapper from './components/auth/SignupWrapper';
import {
  open,
  useCustomOpen,
  UpdateGalleryContextProvider,
  StatsContextProvider,
} from './context';
import StadiumProfile from './pages/StadiumProfile';
import StadiumsPage from './pages/Stadiums';
import PlayerProfile from './pages/PlayerProfile';
import MatchesPage from './components/matchesPage/Match';
import { AuthProvider } from './context/AuthContext';
import NotFoundPage from './pages/NotFound';
import InternalServerErrorPage from './pages/ServerError';
import PlayersPage from './pages/PlayersPage';
import { ThemeProviderWrapper } from './context/ThemeContext';

const socket = io.connect('http://localhost:8080');

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
        index: true,
        element: <MatchesPage />,
      },
      {
        path: 'stadiums',
        element: <StadiumsPage />,
      },
      {
        path: 'players/',
        element: <PlayersPage />,
      },
      { path: 'match/:matchId', element: <MatchRoomPage socket={socket} /> },
    ],
  },

  {
    path: '/profile',
    element: <RootLayout />,
    children: [
      { path: 'stadium/:id', element: <StadiumProfile /> },
      { path: 'player/:id', element: <PlayerProfile /> },
    ],
  },
  {
    path: '/serverError',
    element: <InternalServerErrorPage />,
  },

  { path: '*', element: <NotFoundPage /> },
]);
const App = (): ReactElement => {
  return (
    <ThemeProviderWrapper>
      <AuthProvider>
        <open.Provider value={useCustomOpen()}>
          <StatsContextProvider>
            <UpdateGalleryContextProvider>
              <RouterProvider router={router} />
            </UpdateGalleryContextProvider>
          </StatsContextProvider>
        </open.Provider>
      </AuthProvider>
    </ThemeProviderWrapper>
  );
};

export default App;
