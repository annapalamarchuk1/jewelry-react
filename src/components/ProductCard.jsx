import { useState } from 'react';

const ProductCard = ({ item }) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '16px',
    width: '280px',
    textAlign: 'center',
    transition: 'all 0.3s ease', 
    
    boxShadow: isHovered 
      ? '0 10px 20px rgba(212, 175, 55, 0.2)' 
      : '0 4px 6px rgba(0,0,0,0.05)',        
    transform: isHovered ? 'translateY(-5px)' : 'none',
    cursor: 'pointer'
  };

  const counterButtonStyle = {
    backgroundColor: '#f1f5f9',
    color: '#334155',
    border: '1px solid #e2e8f0',
    padding: '8px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'background 0.2s'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div style={{ width: '100%', height: '250px', overflow: 'hidden', borderRadius: '12px', marginBottom: '15px' }}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px', color: '#1e293b' }}>{item.name}</h3>
      <p style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '20px' }}>{item.price.toLocaleString()} грн</p>
      
      {/* Блок вибору кількості */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
        {/* Кнопка Мінус */}
        <button 
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          style={counterButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e2e8f0'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f1f5f9'}
        >
          −
        </button>
        
        {/* Кількість */}
        <span style={{ fontSize: '1.3rem', fontWeight: '600', color: '#1e293b', minWidth: '30px' }}>
          {count}
        </span>
        
        {/* Кнопка Плюс */}
        <button 
          onClick={() => setCount(count + 1)}
          style={counterButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e2e8f0'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f1f5f9'}
        >
          +
        </button>
      </div>

      {count > 0 && (
        <button style={{
          backgroundColor: '#D4AF37',
          color: 'white',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: '600',
          width: '100%',
          transition: 'background 0.2s'
        }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#B5942F'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#D4AF37'}
        >
          Додати до кошика ({count})
        </button>
      )}
    </div>
  );
};

export default ProductCard;