import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  return isAuthenticated ? (children) : (
    <Navigate to="/signin" replace />
  );
};

export default PrivateRoute;
