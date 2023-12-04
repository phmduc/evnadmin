import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Users = lazy(() => import('../../container/users/Users'));
const AddUser = lazy(() => import('../../container/users/AddUsers'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Users />} />
      <Route path="add-user/*" element={<AddUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PagesRoute;
