import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext'; // Moved up for consistency
import { CartProvider } from './context/CartContext'; // Moved up for consistency
import CartPage from './pages/CartPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <CartProvider>
        {/* Set the basename for routing. process.env.PUBLIC_URL is derived from
            the "homepage" field in your package.json during the build process.
            For "https://miio93.github.io/ecommerce-sample/", PUBLIC_URL will be "/ecommerce-sample". */}
        <Router basename={process.env.PUBLIC_URL}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<Navigate to="/" replace />} /> {/* Catches all undefined paths and redirects to Home */}
            </Routes>
          </Layout>
          <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
