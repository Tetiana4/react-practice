import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  height: 100px;
  margin: 0;
  padding: 0;
`;
export const Header = styled.header`
  border-bottom: 2px groove #c85b86;
  background: #e3adc2;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled(NavLink)`
  text-align: center;
  margin: 0;
  border-radius: 4px;
  text-decoration: none;
  padding: 20px 40px;
  color: #140e12;
  &.active {
    color: white;
    background-color: #751455;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: #cc9bbb;
  }
`;
export const Span = styled.span`
  color: black;
  margin-right: 5px;
  position: relative;
  top: 3px;
`;
