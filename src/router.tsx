import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from './App';

// Lazy load components for code splitting
const Main = lazy(() => import('./views/Main'));
const Article = lazy(() => import('./views/Article'));
const Home = lazy(() => import('./views/Home'));
const PrivacyPolicy = lazy(() => import('./articles/PrivacyPolicy'));
const JoinUs = lazy(() => import('./articles/JoinUs'));
const TOS = lazy(() => import('./articles/TOS'));
const TOP = lazy(() => import('./articles/TOP'));
const NotFound = lazy(() => import('./views/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: '/',
        element: <Article />,
        children: [
          {
            path: 'privacy-policy',
            element: <PrivacyPolicy />,
          },
          {
            path: 'join-us',
            element: <JoinUs />,
          },
          {
            path: 'tos',
            element: <TOS />,
          },
          {
            path: 'top',
            element: <TOP />,
          },
          {
            path: 'terms-of-pages',
            element: <TOP />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
