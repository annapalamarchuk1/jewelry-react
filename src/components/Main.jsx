import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const API_URL = "http://127.0.0.1:8000";

function Main({ addToCart }) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("Всі");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/categories`)
      .then(res => {
        setCategories(["Всі", ...res.data]);
      })
      .catch(err => console.error("Помилка категорій:", err));
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}/api/items`)
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Помилка:", err);
        setLoading(false);
      });
  }, []);

  const filtered = selected === "Всі"
    ? items
    : items.filter(i => i.category === selected);

  return (
    <div style={{ padding: "40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            style={{
              padding: "10px 24px",
              background: selected === cat ? "#D4AF37" : "transparent",
              color: selected === cat ? "#fff" : "#D4AF37",
              border: "1px solid #D4AF37",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.95rem",
              transition: "all 0.3s ease"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ textAlign: "center" }}>Завантаження...</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          {filtered.map(item => (
            <ProductCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;