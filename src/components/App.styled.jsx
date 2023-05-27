import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  margin: 3px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: color 0.3s ease, background-color 0.3s ease; /* Added transition property */

  &.active {
    color: white;
    background-color: orangered;
  }
  &:hover {
    /* Add your desired styles for when the link is hovered */
    /* Example styles: */
    color: white;
    background-color: #ff591d;
  }
`;
