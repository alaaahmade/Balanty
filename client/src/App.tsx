import { ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import RootLayout from './layouts/RootLayout';

import { LandingPage } from './pages';

import LightTheme from './themes';

import {
  open,
  useCustomOpen,
  UpdateGalleryContextProvider,
  StatsContextProvider,
} from './context';

import StadiumProfile from './pages/StadiumProfile';
import StadiumsPage from './pages/Stadiums';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/player/login', element: <h1>player login</h1> },
      { path: '/stadium/login', element: <h1>stadium login</h1> },
      { path: '/player/signup', element: <h1>player signup</h1> },
      { path: '/stadium/signup', element: <h1>stadium signup</h1> },
    ],
  },
  {
    path: '/home',
    element: <RootLayout />,
    children: [
      {
        path: 'stadiums/',
        element: <StadiumsPage />,
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
      <open.Provider value={useCustomOpen()}>
        <StatsContextProvider>
          <UpdateGalleryContextProvider>
            <RouterProvider router={router} />
          </UpdateGalleryContextProvider>
        </StatsContextProvider>
      </open.Provider>
    </ThemeProvider>
  );
};

export default App;
