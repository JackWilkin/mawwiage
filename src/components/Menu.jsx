import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lavendar, sage, cream } from '../styles/colors';

export default function Menu() {
  return (
    <Navbar>
      <NavbarLink to="/home">
        Home
      </NavbarLink>
      <NavbarLink to="/save-the-date">
        Save the date
      </NavbarLink>
      <NavbarLink to="/gallery">
        Gallery
      </NavbarLink>
      {/* TODO: add RSVP and registry pages */}
    </Navbar>
  );
}

const Navbar = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  width: 100%;
`;

const NavbarLink = styled(Link)`
  border-right: 1px solid ${lavendar};
  border-bottom: 1px solid ${lavendar};
  color: ${lavendar};
  flex-grow: 1;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  width: fit-content;

  &:hover {
    background-color: ${sage};
    color: ${cream};
  }
`;