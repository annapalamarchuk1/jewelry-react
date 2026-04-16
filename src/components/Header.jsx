import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount, clearCart }) => {
  const headerStyle = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px 8%', backgroundColor: '#fff', borderBottom: '1px solid #f1f5f9',
    position: 'sticky', top: 0, zIndex: 1000
  };

  const logoStyle = { 
    fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37', 
    textTransform: 'uppercase', textDecoration: 'none' 
  };
  const navListStyle = { display: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0, alignItems: 'center' };
  const linkStyle = { textDecoration: 'none', color: '#334155', fontSize: '0.9rem', fontWeight: '600' };

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>Jewelry Store</Link>
      
      <nav>
        <ul style={navListStyle}>
          <li><Link to="/" style={linkStyle}>Головна</Link></li>
          <li><Link to="/catalog" style={linkStyle}>Каталог</Link></li>
          <li><Link to="/about" style={linkStyle}>Про нас</Link></li>
          
          <li 
            onClick={clearCart} 
            style={{ position: 'relative', cursor: 'pointer', marginLeft: '20px' }}
            title="Очистити кошик"
          >
            <span style={{ fontSize: '1.4rem' }}>🛒</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-10px', backgroundColor: '#D4AF37',
                color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.7rem', border: '2px solid #fff'
              }}>{cartCount}</span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;