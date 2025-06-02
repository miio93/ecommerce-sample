import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { ReactComponent as FlowerIcon } from '../../assets/FlowerIcon.svg'; // Adjust path as needed

const Header = () => {
  const { getItemCount } = useCart(); // Get item count from cart context
  const { currentUser, logout } = useAuth(); // Get currentUser and logout from auth context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <Navbar style={{ backgroundColor: 'var(--main-color)' }} expand="lg" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FlowerIcon style={{ width: '30px', height: '30px', fill: 'currentColor', verticalAlign: 'middle' }} />
          B&H
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'var(--text-color)', marginRight: '15px' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" style={{ color: 'var(--text-color)', marginRight: '15px' }}>Products</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'var(--text-color)', marginRight: '15px' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'var(--text-color)', marginRight: '15px' }}>Contact</Nav.Link>
            {currentUser ? (
              <>
                <NavDropdown title={currentUser.email} id="basic-nav-dropdown" style={{ marginRight: '15px' }}>
                  {/* <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={Link} to="/orders">My Orders</NavDropdown.Item> */}
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" style={{ color: 'var(--text-color)', marginRight: '15px' }}>Login</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/cart" style={{ color: 'var(--text-color)' }} className="d-flex align-items-center">
              Cart
              {getItemCount() > 0 && (
                <Badge pill bg="danger" style={{ marginLeft: '5px' }}>{getItemCount()}</Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;