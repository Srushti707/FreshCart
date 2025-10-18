import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // <-- IMPORT AUTH
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const { user, dispatch: authDispatch } = useAuth(); // <-- GET USER AND DISPATCH
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    authDispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🥦 FreshCart</Link>
      <div className="nav-links">
        <Link to="/cart" className="navbar-cart-link">
          <span>Cart ({cart.length})</span>
        </Link>
        {user ? (
          <div className="nav-user-info">
            <span>Hello, {user.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;