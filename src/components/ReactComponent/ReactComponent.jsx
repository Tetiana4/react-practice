import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PokemonApp from '../Pokemon/PokemonApp';
import { Box, NavItem } from './ReactComponent.styled';

const navItem = [
  { href: 'pokemon', text: 'Pokemon' },
  { href: 'country', text: 'Country' },
];
export const ReactComponent = () => {
  return (
    <Box>
      {navItem.map(({ href, text }) => (
        <NavItem to={href}>{text}</NavItem>
      ))}
      <Outlet />
    </Box>
  );
};
