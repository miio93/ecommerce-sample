import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      let users = [];
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        try {
          users = JSON.parse(storedUsers);
        } catch (error) {
          console.error("Failed to parse users from localStorage during login:", error);
        }
      }
      const user = users.find(u => u.email === email && u.password === password); // Checking password directly (NOT FOR PRODUCTION)

      if (user) {
        // Simulate successful login
        login({ email: user.email }); // Use login function from AuthContext
        toast.success('Login successful!'); // Optional: if you want a toast here
        navigate('/'); // Redirect to homepage after login
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
      console.error("Login error:", err);
      toast.error('An unexpected error occurred during login. Please try again.');
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '100%', maxWidth: '400px', borderColor: 'var(--main-color)' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: 'var(--text-color)' }}>Login</h2>
          <Alert variant="info" className="text-center" style={{fontSize: '0.9rem'}}>
            This is a sample site. Login uses local browser storage and is not secure for real applications.
          </Alert>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmailLogin">
              <Form.Label style={{ color: 'var(--text-color)' }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordLogin">
              <Form.Label style={{ color: 'var(--text-color)' }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <Button type="submit" className="btn-modern-gray w-100">
              Login
            </Button>
            <div className="text-center mt-3">
              <span style={{ color: 'var(--text-color)' }}>Don't have an account? </span>
              <Link to="/register" style={{ color: 'var(--text-color)', fontWeight: 'bold' }}>Register here</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;