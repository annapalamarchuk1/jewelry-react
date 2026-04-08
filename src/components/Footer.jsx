const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '30px 0',
    color: '#64748b',
    fontSize: '0.85rem',
    borderTop: '1px solid #f1f5f9'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 Jewelry Store. Всі права захищені.</p>
    </footer>
  );
};

export default Footer;