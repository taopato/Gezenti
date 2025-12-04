import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';

const MainLayout: React.FC = () => {
  return (
    <>
      <MainHeader />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

