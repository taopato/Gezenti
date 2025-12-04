import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../core/auth/tokenStorage';

const PrivateRoute: React.FC = () => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
