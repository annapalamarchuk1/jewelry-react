import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Товар не знайдено</div>;
  }

  return (
    <div style={{ padding: '60px 8%', minHeight: '70vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ 
        display: 'flex', 
        gap: '50px', 
        backgroundColor: '#fff', 
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <img src={product.image} alt={product.name} style={{ width: '400px', borderRadius: '15px', objectFit: 'cover' }} />
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ color: '#1a1a1a', fontSize: '2.5rem' }}>{product.name}</h1>
          <p style={{ fontSize: '1.8rem', color: '#D4AF37', fontWeight: 'bold', margin: '20px 0' }}>{product.price} грн</p>
          <div style={{ height: '2px', width: '50px', backgroundColor: '#D4AF37', marginBottom: '20px' }}></div>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
            {product.description}
          </p>
          <Link to="/catalog" style={{ 
            color: '#D4AF37', 
            fontWeight: 'bold', 
            textDecoration: 'none', 
            border: '1px solid #D4AF37', 
            padding: '12px 25px', 
            borderRadius: '25px' 
          }}>
            ← Назад до каталогу
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;