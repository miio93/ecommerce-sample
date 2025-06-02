import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      let users = [];
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        try {
          users = JSON.parse(storedUsers);
        } catch (error) {
          console.error("Failed to parse users from localStorage:", error);
          localStorage.removeItem('users'); // Consider clearing corrupted users data
        }
      }
      const existingUser = users.find(user => user.email === email);

      if (existingUser) {
        setError('User with this email already exists.');
        return;
      }

      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      toast.success('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Failed to register. Please try again.');
      toast.error('Failed to register. Please try again.');
      console.error("Registration error:", err);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '100%', maxWidth: '400px', borderColor: 'var(--main-color)' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: 'var(--text-color)' }}>Register</h2>
          <Alert variant="info" className="text-center" style={{fontSize: '0.9rem'}}>
            This is a sample site. User registration is stored only in your local browser and will not be saved permanently.
          </Alert>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmailRegister">
              <Form.Label style={{ color: 'var(--text-color)' }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordRegister">
              <Form.Label style={{ color: 'var(--text-color)' }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPasswordRegister">
              <Form.Label style={{ color: 'var(--text-color)' }}>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </Form.Group>

            <Button type="submit" className="btn-modern-gray w-100">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterPage;