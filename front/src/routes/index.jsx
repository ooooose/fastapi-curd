import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import TasksPage from '../components/pages/TasksPage';
import TopPage from '../components/pages/TopPage';
import About from '../components/pages/Axios';
import Swr from '../components/pages/Swr';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path='/axios' element={<About />} />
      <Route path='/swr' element={<Swr />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
  );
};

export default AppRoutes;