const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 8%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #f1f5f9'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const navListStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '30px', 
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#334155',
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase'
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Jewelry Store</div>
      <nav>
        <ul style={navListStyle}>
          <li><a href="#" style={linkStyle}>Головна</a></li>
          <li><a href="#" style={linkStyle}>Каталог</a></li>
          <li><a href="#" style={linkStyle}>Про нас</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;