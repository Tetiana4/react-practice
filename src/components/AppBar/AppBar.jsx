import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavItem, Box, Span } from './AppBar.styled';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

const navItem = [
  { href: 'html', text: 'HTML', icon: SiHtml5 },
  { href: 'css', text: 'CSS', icon: SiCss3 },
  { href: 'js', text: 'Java Script', icon: SiJavascript },
  { href: 'react', text: 'React', icon: SiReact },
];
export const AppBar = () => {
  return (
    <Box>
      {navItem.map(({ href, icon: Icon, text }) => (
        <NavItem to={href} key={href}>
          <Span>
            <Icon size="16" />
          </Span>
          {text}
        </NavItem>
      ))}
    </Box>
  );
};
