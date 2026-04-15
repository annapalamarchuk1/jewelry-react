import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Spinner = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
    <div style={{ border: '6px solid #f3f3f3', borderTop: '6px solid #d4af37', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
    <p style={{ marginTop: '15px', color: '#64748b' }}>Завантаження колекції...</p>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: '#fff', padding: '15px', textAlign: 'center', borderRadius: '12px', marginBottom: '30px', border: '2px solid #d4af37', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <span style={{ fontWeight: 'bold', color: '#d4af37' }}>✨ АКЦІЯ ТРИВАЄ! ✨</span> 
      <span style={{ marginLeft: '10px' }}>До кінця знижок: </span>
      <strong>{Math.floor(timeLeft/60)}:{timeLeft%60 < 10 ? '0' : ''}{timeLeft%60}</strong>
    </div>
  );
};

const Main = ({ addToCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const products = [
    { id: 1, name: "Золота каблучка", price: 12750, oldPrice: 15000, image: "https://minimal.com.ua/wp-content/uploads/2024/01/k611zh-br-dm-m-800x800.jpg" },
    { id: 2, name: "Класичне кольє", price: 21250, oldPrice: 25000, image: "https://img.ukrzoloto.ua/images/pr/520_520/c6b84dfbfe95c5f2cc6b091b8882ec07/1769460786/UZ31735191_000176405.webp" },
    { id: 3, name: "Сережки 'Грація'", price: 6800, oldPrice: 8000, image: "https://goldensilver.ua/image/cache/catalog/deva1/5/TR-02-00015PZ-90-1000x1000.jpg" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <main style={{ padding: '60px 8%', backgroundColor: '#f8fafc', minHeight: '80vh' }}>
      {/* Акційний банер */}
      <PromoBanner />

      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '0 0 10px', letterSpacing: '1px' }}>Каталог</h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Витонченість у кожній деталі. Ми поєднуємо класичну ювелірну майстерність із сучасними трендами, 
          щоб створювати прикраси, які стають частиною вашої історії.
        </p>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        {products.map(p => (
          <ProductCard key={p.id} item={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
};

export default Main;