import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

// Placeholder for a health-focused background image
// You can replace this URL with an actual image you like.
// Example from Picsum Photos that might fit a "health/beauty" theme:
const homePageBackgroundImage = 'https://picsum.photos/id/103/1200/800'; // Example: Green leaves, nature

const HomePage = () => {
  return (
    <div
      style={{
        // This div will take up the available space in the main content area
        // and have the background image.
        minHeight: 'calc(100vh - 56px - 48px)', // Full viewport - header - main container padding y
        backgroundImage: `url(${homePageBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'absolute', // overlay
        borderRadius: '0.25rem', // Optional: if you want rounded corners like other content
        top: 56,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 56px)'
      }}
    >
      {/* Optional: Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust opacity as needed
        zIndex: 1,
      }}></div>

      <Container style={{ zIndex: 2, position: 'relative' }}>
        <h1 
          className="display-3 fw-bold" 
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)', letterSpacing: '-0.5px' }}
        >
          Elevate Your Well-being
        </h1>
        <p 
          className="lead fs-3 my-4" 
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)', fontWeight: 300 }}
        >
          Discover our curated collection of natural beauty and health essentials.
        </p>
        <p className="mt-5">
          <Button 
            as={Link} to="/products" 
            variant="light" 
            size="lg" 
            style={{ color: '#212529', fontWeight: '500', padding: '0.75rem 2rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.5px' }}
          >
          Shop Our Products
          </Button>
        </p>
      </Container>

    </div>
  );
};

export default HomePage;