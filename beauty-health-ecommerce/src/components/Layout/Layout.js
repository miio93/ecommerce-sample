import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container as="main" className="py-3 flex-grow-1">
        {children}
      </Container>
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;