// src/pages/PrivateRoute.js or src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  // Check if the user is authenticated (e.g., check for a JWT token in localStorage)
  const isAuthenticated = localStorage.getItem('authToken'); // Assuming the token is stored in localStorage

  // If authenticated, render the passed element (the protected page component)
  // If not authenticated, redirect to the login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
