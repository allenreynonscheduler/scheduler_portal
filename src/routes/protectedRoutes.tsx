import { Navigate, Outlet } from 'react-router-dom';
import { lazy } from 'react';

const Dashboard = lazy(() => import('pages/dashboard/index'));
const CategoriesPage = lazy(() => import('pages/categories'));

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
      path: 'categories',
      element: <CategoriesPage />,
    },
  ],
};

export default protectedRoutes;
