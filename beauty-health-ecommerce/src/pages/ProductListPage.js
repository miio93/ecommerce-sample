import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/Product/ProductCard';
import productsData from '../data/products.json'; // Importing the JSON data

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    // For this portfolio, we're directly using the imported JSON
    setProducts(productsData);
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center" style={{ color: 'var(--text-color)' }}>Our Products</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListPage;