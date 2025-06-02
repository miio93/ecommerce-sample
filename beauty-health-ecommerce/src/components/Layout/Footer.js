import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--cream-color)', color: 'var(--header-footer-text)', padding: '20px 0' }} className="text-center mt-auto">
      <Container>
        <p>&copy; {new Date().getFullYear()} Beauty & Health Portfolio Site. All Rights Reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>This is a sample site for portfolio purposes. User registration and cart data are stored locally in your browser and are not persistent.</p>
      </Container>
    </footer>
  );
};

export default Footer;