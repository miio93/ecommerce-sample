import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart, getItemCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h1 style={{ color: 'var(--text-color)' }}>Your Cart is Empty</h1>
        <p style={{ color: 'var(--text-color)' }}>Looks like you haven't added anything to your cart yet.</p>
        <Button as={Link} to="/products" className="btn-modern-gray">
          Shop Products
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4" style={{ color: 'var(--text-color)' }}>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id} className="mb-3 p-3 shadow-sm" style={{ borderColor: 'var(--cream-color)' }}>
                <Row className="align-items-center">
                  <Col md={2} xs={3}>
                    <Image src={item.imageUrl} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3} xs={5}>
                    <Link to={`/products/${item.id}`} style={{ textDecoration: 'none', color: 'var(--text-color)', fontWeight: 'bold' }}>{item.name}</Link>
                  </Col>
                  <Col md={2} xs={4} className="text-md-center">
                    ${item.price.toFixed(2)}
                  </Col>
                  <Col md={3} xs={9} className="mt-2 mt-md-0">
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      min="1"
                      style={{ width: '70px', display: 'inline-block', marginRight: '10px' }}
                    />
                  </Col>
                  <Col md={2} xs={3} className="text-end mt-2 mt-md-0">
                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card style={{ borderColor: 'var(--main-color)' }}>
            <Card.Body>
              <Card.Title as="h4" style={{ color: 'var(--text-color)' }}>Cart Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <span style={{ color: 'var(--text-color)' }}>Items ({getItemCount()})</span>
                  <span style={{ color: 'var(--text-color)' }}>${getCartTotal().toFixed(2)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <strong style={{ color: 'var(--text-color)' }}>Total</strong>
                  <strong style={{ color: 'var(--text-color)' }}>${getCartTotal().toFixed(2)}</strong>
                </ListGroup.Item>
              </ListGroup>
              <div className="d-grid gap-2 mt-3">
              <Button type="button" className="btn-modern-gray">
                  Proceed to Checkout (Demo)
                </Button>
                <Button variant="outline-secondary" type="button" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;