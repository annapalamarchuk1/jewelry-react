import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item, addToCart }) => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`item_count_${item.id}`);
    return saved ? parseInt(saved) : 0;
  });
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem(`item_count_${item.id}`, count);
  }, [count, item.id]);

  const handleAddClick = () => {
  if (count > 0) {
    addToCart(count); 
    setCount(0);  
    localStorage.setItem(`item_count_${item.id}`, 0); 
  }
};

  const handleRemove = () => {
    addToCart(-count); 
    setCount(0);
    localStorage.setItem(`item_count_${item.id}`, 0);
  };

  return (
    <div 
      style={{
        backgroundColor: '#fff', 
        padding: '20px', 
        borderRadius: '16px', 
        width: '280px', 
        textAlign: 'center',
        transition: 'all 0.3s ease', 
        boxShadow: isHovered ? '0 10px 20px rgba(212, 175, 55, 0.2)' : '0 4px 6px rgba(0,0,0,0.05)',
        transform: isHovered ? 'translateY(-5px)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
     <img src={item.image} alt={item.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
<h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{item.name}</h3>
<div style={{ marginBottom: '15px' }}>
  <span style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price} грн</span>
</div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)} style={{ padding: '8px 15px', cursor: 'pointer' }}>−</button>
        <span style={{ fontWeight: 'bold' }}>{count}</span>
        <button onClick={() => setCount(count + 1)} style={{ padding: '8px 15px', cursor: 'pointer' }}>+</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button 
          onClick={handleAddClick}
          style={{ backgroundColor: '#D4AF37', color: 'white', border: 'none', padding: '10px', borderRadius: '25px', width: '100%', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Додати до кошика
        </button>

        <Link 
  to={`/product/${item.id}`}
  style={{ 
    display: 'inline-block', 
    padding: '10px', 
    borderRadius: '25px', 
    border: '1px solid #d4af37', 
    color: '#d4af37', 
    textDecoration: 'none', 
    fontWeight: 'bold',
    fontSize: '0.9rem'
  }}
>
  Детальніше
</Link>
      </div>

      {count > 0 && (
        <button 
          onClick={handleRemove}
          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.8rem', marginTop: '10px', textDecoration: 'underline' }}
        >
          Видалити вибір
        </button>
      )}
    </div>
  );
};

export default ProductCard;