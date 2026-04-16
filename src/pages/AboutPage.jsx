import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ padding: '100px 8%', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ color: '#0f172a', fontSize: '2.5rem' }}>Про Jewelry Store</h1>
      <div style={{ maxWidth: '800px', margin: '40px auto', lineHeight: '1.8', color: '#64748b', fontSize: '1.1rem' }}>
        <p>
          Ми - сімейна майстерня, яка перетворилася на сучасний бренд. Кожна наша прикраса - це поєднання 
          традиційного ювелірного мистецтва та сміливих сучасних ідей.
        </p>
        <p style={{ marginTop: '20px' }}>
          Використовуємо лише сертифіковані метали 585 та 750 проби та натуральне каміння. 
          Ваша довіра - наша найбільша цінність.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;