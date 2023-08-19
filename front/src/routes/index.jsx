import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import TasksPage from '../components/pages/TasksPage';
import CreateTask from '../components/pages/CreateTask';
import TopPage from '../components/pages/TopPage';

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
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/tasks/create" element={<CreateTask />} />
    </Routes>
  );
};

export default AppRoutes;