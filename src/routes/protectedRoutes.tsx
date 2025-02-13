import { Navigate, Outlet } from 'react-router-dom';
import { lazy } from 'react';

const Dashboard = lazy(() => import('pages/dashboard/index'));
const LeaguesPage = lazy(() => import('pages/leagues/index'));
const Seasons = lazy(() => import('pages/seasons/index'));
const Divisions = lazy(() => import('pages/divisions/index'));
const Conference = lazy(() => import('pages/conference/index'));
const Arena = lazy(() => import('pages/arena/index'));
const Teams = lazy(() => import('pages/teams/index'));

// Protected Route Component
const ProtectedRoute = () => {
  const token = localStorage.getItem('token'); // Consider using context/auth provider
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export const protectedRoutes = {
  element: <ProtectedRoute />,
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: 'leagues',
      element: <LeaguesPage />,
    },
    {
      path: 'seasons',
      element: <Seasons />,
    },
    {
      path: 'divisions',
      element: <Divisions />,
    },
    {
      path: 'conference',
      element: <Conference />,
    },
    {
      path: 'arena',
      element: <Arena />,
    },
    {
      path: 'teams',
      element: <Teams />,
    },
  ],
};

export default protectedRoutes;
