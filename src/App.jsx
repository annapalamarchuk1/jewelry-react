import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const products = [
  { 
    id: 1, 
    name: "Золота каблучка", 
    price: 12750, 
    oldPrice: 15000, 
    image: "https://minimal.com.ua/wp-content/uploads/2024/01/k611zh-br-dm-m-800x800.jpg",
    description: "Вишукана каблучка з червоного золота 585 проби. Класичний дизайн з діамантовим огранюванням, що підкреслить вашу елегантність."
  },
  { 
    id: 2, 
    name: "Класичне кольє", 
    price: 21250, 
    oldPrice: 25000, 
    image: "https://img.ukrzoloto.ua/images/pr/520_520/c6b84dfbfe95c5f2cc6b091b8882ec07/1769460786/UZ31735191_000176405.webp",
    description: "Кольє ручної роботи з білого золота. Ідеальний вибір для особливих подій та вечірніх образів."
  },
  { 
    id: 3, 
    name: "Сережки 'Грація'", 
    price: 6800, 
    oldPrice: 8000, 
    image: "https://goldensilver.ua/image/cache/catalog/deva1/5/TR-02-00015PZ-90-1000x1000.jpg",
    description: "Легкі та витончені сережки зі срібла з позолотою. Додадуть ніжного сяйва вашому повсякденному стилю."
  }
];

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
        
         <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;