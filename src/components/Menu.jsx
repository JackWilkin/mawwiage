import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lavendar } from '../styles/colors';

export default function Menu() {
  return (
    <Navbar>
      {/* <NavbarTitle>Menu</NavbarTitle> */}
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
`;

const NavbarTitle = styled.span`
  color: ${lavendar};
  font-size: 1.5rem;
  flex-grow: 1;
  padding-left: 1rem;
`;

const NavbarLink = styled(Link)`
  border-left: 1px solid ${lavendar};
  color: ${lavendar};
  width: fit-content;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    background-color: white;
  }
`;