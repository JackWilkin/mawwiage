import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lavendar, sage, cream } from '../styles/colors';

export default function Menu() {
  return (
    <Navbar>
      <NavbarLink to="/home">
        Menu
      </NavbarLink>
      <NavbarLink to="/save-the-date">
        Save the date
      </NavbarLink>
      <NavbarLink to="/gallery">
        Gallery
      </NavbarLink>
    </Navbar>
  );
}

const Navbar = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 60px;
`;

const NavbarLink = styled(Link)`
  border-left: 1px solid ${lavendar};
  color: ${lavendar};
  width: fit-content;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${sage};
    color: ${cream};
  }
`;