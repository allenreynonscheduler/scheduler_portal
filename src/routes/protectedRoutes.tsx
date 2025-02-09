import { Navigate, Outlet } from 'react-router-dom';
import { lazy } from 'react';

const Dashboard = lazy(() => import('pages/dashboard/index'));
const CategoriesPage = lazy(() => import('pages/categories'));
const LeaguesPage = lazy(() => import('pages/leagues'));
const Seasons = lazy(() => import('pages/seasons'));
const Divisions = lazy(() => import('pages/divisions'));
const Conference = lazy(() => import('pages/conference'));
const Arena = lazy(() => import('pages/arena'));
const Teams = lazy(() => import('pages/teams'));

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
