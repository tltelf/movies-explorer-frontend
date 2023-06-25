import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const isAuth = React.useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to='/signin' replace />;
};
