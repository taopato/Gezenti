import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from '../shared/components/layout/AuthLayout';
import { LoginPage } from '../features/auth/pages/LoginPage';
import MainLayout from '../layout/MainLayout';
import PrivateRoute from '../components/PrivateRoute';
import HomePage from '../pages/HomePage';
import DiscoverPage from '../pages/DiscoverPage';
import ProfilePage from '../pages/ProfilePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        }
      />

      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/kesfet" element={<DiscoverPage />} />
          <Route path="/profil" element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
