import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import PageLogin from './pages/Auth/Login';
import DashboardHeader from './pages/Dashboard/Dashboard-header';
import DashboardStudent from './pages/Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PageLogin />} />

        <Route path="/dashboard" element={<DashboardStudent />} >

        </Route>
      </Routes>

    </Router>
  );
};

export default AppRoutes;