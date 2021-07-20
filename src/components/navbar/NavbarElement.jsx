import styled from 'styled-components';

import { NavLink as Link } from 'react-router-dom';
import { ImSpoonKnife } from 'react-icons/im';

export const Nav = styled.nav`
  background: transparent;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  position: relative;
  font-weight: 700;
  
  
 
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-200%, 100%);
    font-weight: bold;
  }
  h1 {
    
    transform: translate(-150%, 100%);
    font-weight: bold;
  }
 
`;

export const Bars = styled(ImSpoonKnife)`
  font-size: 3rem;
  transform: translate(-50%, -15%);
`;