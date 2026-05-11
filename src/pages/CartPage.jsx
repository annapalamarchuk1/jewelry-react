import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, clearCart }) => {
  const total = cartItems.reduce((sum, i) => sum + parseFloat(i.price) * i.count, 0);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#D4AF37", marginBottom: "20px" }}>Кошик порожній</h2>
        <Link to="/catalog" style={{
          color: "#D4AF37",
          border: "1px solid #D4AF37",
          padding: "12px 30px",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Перейти до каталогу
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "60px 8%", minHeight: "70vh" }}>
      <h2 style={{ color: "#D4AF37", marginBottom: "40px", textAlign: "center" }}>Ваш кошик</h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {cartItems.map(item => (
          <div key={item.id} style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
            marginBottom: "16px",
            borderRadius: "16px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            backgroundColor: "#fff"
          }}>
            <img src={item.image} alt={item.title} style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "12px"
            }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "1.1rem" }}>{item.title}</h3>
              <p style={{ color: "#888", margin: "0 0 4px" }}>{item.category}</p>
              <p style={{ color: "#D4AF37", fontWeight: "bold", margin: 0 }}>
                {item.price} грн × {item.count} = {(parseFloat(item.price) * item.count).toFixed(2)} грн
              </p>
            </div>
          </div>
        ))}

        <div style={{
          padding: "20px",
          borderTop: "2px solid #D4AF37",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h3 style={{ margin: 0 }}>
            Разом: <span style={{ color: "#D4AF37" }}>{total.toFixed(2)} грн</span>
          </h3>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={clearCart} style={{
              padding: "12px 24px",
              border: "1px solid #ef4444",
              borderRadius: "25px",
              color: "#ef4444",
              background: "transparent",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              Очистити
            </button>
            <Link to="/catalog" style={{
              padding: "12px 24px",
              border: "1px solid #D4AF37",
              borderRadius: "25px",
              color: "#D4AF37",
              textDecoration: "none",
              fontWeight: "bold"
            }}>
              Продовжити покупки
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;