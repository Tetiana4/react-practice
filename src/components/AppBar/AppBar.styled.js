import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.header`
  height: 100vh;

  background-color: #f0e6ed;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-decoration: none;
  color: #140e12;
  padding: 20px 0;
  &.active {
    color: #f2cbe5;
    background-color: #751455;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #751455;
    background-color: #cc9bbb;
  }
`;

export const Span = styled.span`
  color: black;
  margin-right: 5px;
`;
