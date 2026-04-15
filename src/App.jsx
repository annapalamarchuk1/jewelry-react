import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem('total_cart_count');
    return saved ? parseInt(saved) : 0;
  });

  const addToCart = (amount) => {
    setCartCount(prev => {
      const newCount = prev + amount;
      localStorage.setItem('total_cart_count', newCount);
      return newCount;
    });
  };

  // Функція для повного очищення кошика (через клік на іконку в Header)
  const clearCart = () => {
    if (window.confirm("Очистити кошик?")) {
      setCartCount(0);
      localStorage.setItem('total_cart_count', 0);
      // Очищуємо всі локальні лічильники в пам'яті
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('item_count_')) localStorage.setItem(key, 0);
      });
      window.location.reload(); // Перезавантаження для синхронізації карток
    }
  };

  return (
    <div>
      <Header cartCount={cartCount} clearCart={clearCart} />
      <Main addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;