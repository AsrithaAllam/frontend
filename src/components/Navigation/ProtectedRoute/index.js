
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getValuesFromLocalstorage } from '../../Helpers';


const ProtectedRoute = () => {
  const userDetails = getValuesFromLocalstorage('userDetails');

  return userDetails ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;


