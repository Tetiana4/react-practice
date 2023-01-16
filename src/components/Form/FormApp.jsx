import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { StepOne } from './StepOne';

export const FormApp = () => {
  return (
    <>
      <Header />
      <StepOne />
      <Outlet />
    </>
  );
};
