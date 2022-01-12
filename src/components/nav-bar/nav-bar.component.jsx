import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './nav-bar.styles.scss';

const NavBar = () => (
<Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Container>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Container>
    </Container>
  </Navbar>
);

export default NavBar;