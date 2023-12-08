import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useNavigate} from "react-router-dom"
const CustomNavbar = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
const navigate = useNavigate()
  const handleSignout = () => {
    localStorage.removeItem("token")
    navigate("/signin")
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Book Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/books">
              Books
            </Nav.Link>
            <Nav.Link as={Link} to="/authors">
              Authors
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
          <Nav>
            {token ? (
              <Button variant="outline-danger" onClick={handleSignout}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/signin">
                <Button variant="primary">Sign In</Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;