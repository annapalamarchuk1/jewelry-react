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

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [products, setProducts] = useState([]);
  
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem('total_cart_count');
    return saved ? parseInt(saved) : 0;
  });


  useEffect(() => {
    axios.get(`${API_URL}/api/items`)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Помилка:", err));
  }, []);

  const addToCart = (amount) => {
    setCartCount(prev => {
      const newCount = prev + amount;
      localStorage.setItem('total_cart_count', newCount);
      return newCount;
    });
  };

  const clearCart = () => {
    if (window.confirm("Очистити кошик?")) {
      setCartCount(0);
      localStorage.setItem('total_cart_count', 0);
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('item_count_')) localStorage.setItem(key, 0);
      });
      window.location.reload();
    }
  };

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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;