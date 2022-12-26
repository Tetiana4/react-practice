import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
    background-color: blue;
  }
`;

export const Box = styled.div`
  height: 100%;
  width: 200px;
  //   position: fixed;
  //   z-index: 1;
  //   top: 0;
  //   left: 0;
  //   overflow-x: hidden;
  background-color: #c0bfc0;
`;
