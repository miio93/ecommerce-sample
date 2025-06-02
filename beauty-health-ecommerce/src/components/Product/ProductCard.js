import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext'; // Import useCart
import { toast } from 'react-toastify'; // Import toast

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Get addToCart function from context

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
      <Card className="h-100" style={{ border: '1px solid #f0f0f0', borderRadius: '0.25rem' /* Consistent with HomePage if used */ }}>
      <Card.Img variant="top" src={product.imageUrl} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ color: 'var(--text-color)', fontSize: '1.1rem', fontWeight: 500 }}>{product.name}</Card.Title>
        <Card.Text style={{ color: '#555', fontSize: '0.85rem' }} className="flex-grow-1 mb-3">
          {product.description.substring(0, 100)}{product.description.length > 100 ? '...' : ''}
        </Card.Text>
        <Card.Text as="h5" style={{ color: 'var(--text-color)', fontWeight: 600, fontSize: '1.2rem' }} className="mb-3">
          ${product.price.toFixed(2)}
        </Card.Text>
        <div className="mt-auto d-grid gap-2">
          <Button 
            variant="primary" 
            className="btn-modern-gray"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          {/* <Button variant="outline-secondary" style={{ borderColor: 'var(--cream-color)', color: 'var(--text-color)' }}>View Details</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;