import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Blogs = lazy(() => import('../../container/blogs/blogs'));
const BlogDetails = lazy(() => import('../../container/blogs/blogDetail'));
const BlogCreate = lazy(() => import('../../container/blogs/blogCreate'));
const Notifications= lazy(() => import('../../container/notifications/blogs'));
const NotifyCreate = lazy(() => import('../../container/notifications/blogCreate'));






const NotFound = lazy(() => import('../../container/pages/404'));

function BlogRoutes() {
  return (
    <Routes>
      <Route path="blogDetails/:id" element={<BlogDetails />} />
      <Route path="create" element={<BlogCreate />} />
      <Route path="view/*" element={<Blogs />} />
      <Route path="notifications/view/*" element={<Notifications />} />
      <Route path="notifications/create/*" element={<NotifyCreate />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default BlogRoutes;
