import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Spinner = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
    <div style={{ border: '6px solid #f3f3f3', borderTop: '6px solid #d4af37', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
    <p style={{ marginTop: '15px', color: '#64748b' }}>Завантаження колекції...</p>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

const Main = ({ addToCart, products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <main style={{ padding: '60px 8%', backgroundColor: '#f8fafc', minHeight: '80vh' }}>
      
      {/* Секція заголовку з усіма стилями */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#0f172a', 
          margin: '0 0 10px', 
          letterSpacing: '1px' 
        }}>
          Каталог
        </h2>
        <p style={{ 
          color: '#64748b', 
          fontSize: '1.1rem', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          Витонченість у кожній деталі. Ми поєднуємо класичну ювелірну майстерність із сучасними трендами, 
          щоб створювати прикраси, які стають частиною вашої історії.
        </p>
      </div>
      
      {/* Сітка товарів */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '40px', 
        justifyContent: 'center' 
      }}>
        {products && products.length > 0 ? (
          products.map(p => (
            <ProductCard key={p.id} item={p} addToCart={addToCart} />
          ))
        ) : (
          <p style={{ color: '#64748b' }}>Товари не знайдені</p>
        )}
      </div>
    </main>
  );
};

export default Main;