import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('../../container/dashboard'));
const DemoTwo = lazy(() => import('../../container/dashboard/DemoTwo'));
const DemoThree = lazy(() => import('../../container/dashboard/DemoThree'));
const DemoFour = lazy(() => import('../../container/dashboard/DemoFour'));
const DemoSix = lazy(() => import('../../container/dashboard/DemoSix'));
const DemoSeven = lazy(() => import('../../container/dashboard/DemoSeven'));
const DemoEight = lazy(() => import('../../container/dashboard/DemoEight'));
const DemoNine = lazy(() => import('../../container/dashboard/DemoNine'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index  element={<DemoThree />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
