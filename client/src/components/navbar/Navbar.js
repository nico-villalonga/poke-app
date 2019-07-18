import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Image, Ul } from './NavbarStyle';

const Navbar = props => (
  <nav>
    <Container>
      <Image alt="" src="/images/logo.png" />

      <Ul>
        <li><NavLink exact to="/">Pokemons</NavLink></li>
        <li><NavLink to="/trainers">Trainers</NavLink></li>
        <li><NavLink to="/gyms">Gyms</NavLink></li>
      </Ul>
    </Container>
  </nav>
);

export default Navbar;
