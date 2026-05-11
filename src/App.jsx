import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart_items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    axios.get(`${API_URL}/api/items`)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Помилка:", err));
  }, []);

  const addToCart = (item, count) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      let updated;
      if (existing) {
        updated = prev.map(i =>
          i.id === item.id ? { ...i, count: i.count + count } : i
        );
      } else {
        updated = [...prev, { ...item, count }];
      }
      updated = updated.filter(i => i.count > 0);
      localStorage.setItem('cart_items', JSON.stringify(updated));
      return updated;
    });
  };

  const clearCart = () => {
    if (window.confirm("Очистити кошик?")) {
      setCartItems([]);
      localStorage.removeItem('cart_items');
    }
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.count, 0);

  return (
    <Router>
      <div>
        <Header cartCount={cartCount} clearCart={clearCart} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Main addToCart={addToCart} products={products} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} clearCart={clearCart} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;