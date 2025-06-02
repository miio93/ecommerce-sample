import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ color: 'var(--text-color)' }}>Contact Us</h1>
      <p className="text-center" style={{ color: 'var(--text-color)' }}>
        Have questions? We'd love to hear from you! (This is a placeholder form.)
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: 'var(--text-color)' }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label style={{ color: 'var(--text-color)' }}>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>
        <Button type="submit" className="btn-modern-gray">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;