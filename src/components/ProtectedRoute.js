import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ isSignUpIn }) => {
  const { isAuth } = useContext(CurrentUserContext);

  if (!isSignUpIn) {
    return isAuth ? <Outlet /> : <Navigate to='/' replace />;
  } else {
    return isAuth ? <Navigate to='/movies' replace /> : <Outlet />;
  }
};
