import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cream, coffee, bistre } from '../styles/colors';

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
      <NavbarLink to="/rsvp">
        RSVP
      </NavbarLink>
      <NavbarLink to="/info">
        Info
      </NavbarLink>
      {/* TODO: add registry pages */}
    </Navbar>
  );
}

const Navbar = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  height: 60px;
  width: 100%;
`;

const NavbarLink = styled(Link)`
  align-items: center;
  border-right: 1px solid ${bistre};
  border-bottom: 1px solid ${bistre};
  color: ${bistre};
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  width: fit-content;
  height: inherit;

  &:hover {
    background-color: ${coffee};
    color: ${cream};
  }
`;