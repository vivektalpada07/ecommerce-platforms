import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../css/Header.css';  // Ensure this file includes your CSS class

function Header() {
  return (
    <Navbar expand="lg" className='Header'>
      <Container className='Navbar'>
        <Navbar.Brand href="/" className="protest-guerrilla-regular">
          Eco Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown" style={{ marginTop: '-15px' }}>
              <NavDropdown.Item href="/Furnitures">Furnitures</NavDropdown.Item>
              <NavDropdown.Item href="/Homewares">Homewares</NavDropdown.Item>
              <NavDropdown.Item href="/Electricalgoods">Electrical Goods</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Wishlist' style={{ marginTop: '-15px' }}>Wishlist</Nav.Link>
            <Nav.Link href="/cart" style={{ marginTop: '-15px' }}>Cart</Nav.Link>
            
            <Nav.Link href="/login">
              <Button variant="outline-light" className="login-button">
                Login
              </Button>
            </Nav.Link>
            <Nav.Link href="/signup">
              <Button variant="light" className="signup-button">
                Signup
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;