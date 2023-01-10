import React from 'react';
import { SiPokemon } from 'react-icons/si';
import { IoMdGlobe } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { FaWpforms } from 'react-icons/fa';
import PokemonApp from '../Pokemon/PokemonApp';
import {
  Box,
  Header,
  List,
  NavItem,
  Icon,
  Span,
} from './ReactComponent.styled';

const navItem = [
  { href: 'pokemon', text: 'Pokemon', icon: SiPokemon },
  { href: 'country', text: 'Country', icon: IoMdGlobe },
  { href: 'form', text: 'ReactForm', icon: FaWpforms },
];
export const ReactComponent = () => {
  return (
    <Box>
      <Header>
        <List>
          {navItem.map(({ href, text, icon: Icon }) => (
            <NavItem key={href} to={href}>
              <Span>
                <Icon size="18" />
              </Span>
              {text}
            </NavItem>
          ))}
        </List>
      </Header>
      <Outlet />
    </Box>
  );
};
