import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '100px 8%', textAlign: 'center', backgroundColor: '#fff', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '20px' }}>
        Ласкаво просимо до Jewelry Store
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 40px' }}>
        Відкрийте для себе світ витончених прикрас, створених для вашої неповторності. 
        Вишуканість у кожній деталі нашого каталогу.
      </p>
      <Link to="/catalog" style={{
        backgroundColor: '#D4AF37', color: '#fff', padding: '15px 40px', 
        borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'
      }}>
        Перейти до каталогу
      </Link>
    </div>
  );
};

export default HomePage;