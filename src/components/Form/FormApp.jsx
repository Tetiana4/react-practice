import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const FormApp = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
