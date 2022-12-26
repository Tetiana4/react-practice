import React from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from './Loyout.styled';

export const Loyout = () => {
  return (
    <Box>
      <AppBar />
      {/* <div>Content</div> */}
      <Outlet />
    </Box>
  );
};
