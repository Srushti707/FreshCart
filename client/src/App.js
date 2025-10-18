import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Context Provider
import { CartProvider } from './context/CartContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- IMPORT FOOTER

// Pages
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';   // <-- IMPORT ABOUT PAGE
import ContactPage from './pages/ContactPage'; // <-- IMPORT CONTACT PAGE

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, padding: '1rem' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />     {/* <-- ADD ROUTE */}
              <Route path="/contact" element={<ContactPage />} /> {/* <-- ADD ROUTE */}
            </Routes>
          </main>
          <Footer /> {/* <-- ADD FOOTER */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;