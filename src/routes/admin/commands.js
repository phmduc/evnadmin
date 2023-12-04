
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Project = lazy(() => import('../../container/projectss/Project'));
const NotFound = lazy(() => import('../../container/pages/404'));

function ProjectRoutes() {
  return (
    <Routes>
      <Route path="view/*" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ProjectRoutes;
