import React from 'react';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ color: 'var(--text-color)' }}>About Us</h1>
      <p style={{ color: 'var(--text-color)' }}>
        Welcome to Beauty & Health, your (fictional) destination for premium beauty and wellness products.
        Our mission is to provide high-quality, natural, and effective solutions to enhance your well-being.
      </p>
      <p style={{ color: 'var(--text-color)' }}>This site is a demonstration project built with React.js and Bootstrap for portfolio purposes.</p>
    </Container>
  );
};

export default AboutPage;