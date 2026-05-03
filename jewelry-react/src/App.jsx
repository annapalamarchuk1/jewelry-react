import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: '"Playfair Display", serif, system-ui',
    margin: 0,
    backgroundColor: '#ffffff', 
    color: '#2c3e50'
  };

  const headerWrapper = {
    backgroundColor: '#f8f9fa', 
    borderBottom: '1px solid #eee',
    padding: '1rem 0'
  };

  const footerStyle = {
    backgroundColor: '#f8f9fa',
    color: '#777',
    textAlign: 'center',
    padding: '2rem',
    marginTop: 'auto',
    fontSize: '0.9rem',
    borderTop: '1px solid #eee'
  };

  const mainStyle = {
    padding: '5rem 1rem',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center'
  };

  return (
    <div style={appStyle}>
      <div style={headerWrapper}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <Header />
        </div>
      </div>
      
      <div style={mainStyle}>
        <Main />
      </div>
      
      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  )
}

export default App