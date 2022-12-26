import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PokemonApp from '../Pokemon/PokemonApp';
import { Box } from './ReactComponent.styled';

const navItem = [
  { href: 'pokemon', text: 'Pokemon' },
  { href: 'country', text: 'Country' },
];
export const ReactComponent = () => {
  return (
    <Box>
      {navItem.map(({ href, text }) => (
        <NavLink to={href}>{text}</NavLink>
      ))}
      <Outlet />
    </Box>
  );
};
