import React, { lazy } from "react";

// 懒加载路由
const Home = lazy(() => import('@/pages/Home'));
const ProjectCases = lazy(() => import('@/pages/project-cases/ProjectCases'));
// const ReactPage = lazy(() => import('@/pages/react/React'));
const OtherPage = lazy(() => import('@/pages/other/Other'));
const About = lazy(() => import('@/pages/about/About'));

const routes = [
  {
    key: 'index',
    path: '/',
    element: <Home />
  },
  {
    key: 'home',
    path: '/home',
    element: <Home />
  },
  {
    key: 'project-cases',
    path: '/project-cases',
    element: <ProjectCases />
  },
  // {
  //   key: 'react',
  //   path: '/react',
  //   element: <ReactPage />
  // },
  {
    key: 'other',
    path: '/other',
    element: <OtherPage />
  },
  {
    key: 'about',
    path: '/about-me',
    element: <About />
  },
  {
    key: '404',
    path: '/*',
    element: <About />
  },
];

export default routes;
