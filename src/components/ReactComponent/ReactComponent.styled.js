import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  height: 100px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: #140e12;
  &.active {
    color: #f2cbe5;
    background-color: #751455;
  }
`;
