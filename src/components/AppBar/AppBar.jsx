import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavItem, Box } from './AppBar.styled';

const navItem = [
  { href: 'html', text: 'HTML' },
  { href: 'css', text: 'CSS' },
  { href: 'js', text: 'Java Script' },
  { href: 'react', text: 'ReactComponent' },
];
export const AppBar = () => {
  return (
    <Box>
      {navItem.map(item => (
        <NavItem to={item.href} key={item.href}>
          {item.text}
        </NavItem>
      ))}
    </Box>
  );
};
