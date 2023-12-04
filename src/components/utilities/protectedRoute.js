import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

function ProtectedRoute({ Component, path }) {
  const isLoggedIn = sessionStorage.getItem('user_id');

  return isLoggedIn ? (
    <Routes>
      {' '}
      <Route element={<Component />} path={path} />{' '}
    </Routes>
  ) : (
    <Routes>
      {' '}
      <Route path="/ninjadash-react/admin" element={<Navigate to="/" />} />
    </Routes>
  );
}

ProtectedRoute.propTypes = {
  Component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedRoute;
