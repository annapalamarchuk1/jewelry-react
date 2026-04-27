import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      newErrors.name = "Ім'я не може бути порожнім";
    }

    if (!form.email) {
      newErrors.email = "Email обов'язковий";
    } else if (form.email.length < 6) {
      newErrors.email = "Email занадто короткий";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Введіть коректний email (наприклад: test@gmail.com)";
    }

    if (form.message.length < 10) {
      newErrors.message = "Повідомлення не може бути коротшим за 10 символів";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={s.page}>
        <div style={s.card}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <h2 style={{ color: "#D4AF37", marginBottom: 8 }}>
            Повідомлення надіслано!
          </h2>
          <p style={{ color: "#64748b" }}>
            Дякуємо, <b>{form.name}</b>! Ми зв'яжемося з вами найближчим часом.
          </p>
          <button
            style={s.button}
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", message: "" });
            }}
          >
            Надіслати ще
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={s.page}>
      <div style={s.card}>
        <h1 style={s.title}>Зв'яжіться з нами</h1>
        <p style={s.subtitle}>
          Ми відповімо на ваше повідомлення протягом 24 годин
        </p>

        <form onSubmit={handleSubmit}>
          <div style={s.field}>
            <label style={s.label}>Ім'я</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Введіть ваше ім'я"
              style={{ ...s.input, ...(errors.name ? s.inputErr : {}) }}
            />
            {errors.name && <span style={s.error}>⚠ {errors.name}</span>}
          </div>

          <div style={s.field}>
            <label style={s.label}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              style={{ ...s.input, ...(errors.email ? s.inputErr : {}) }}
            />
            {errors.email && <span style={s.error}>⚠ {errors.email}</span>}
          </div>

          <div style={s.field}>
            <label style={s.label}>Повідомлення</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Напишіть ваше повідомлення..."
              rows={5}
              style={{
                ...s.input,
                ...s.textarea,
                ...(errors.message ? s.inputErr : {}),
              }}
            />
            <span style={s.counter}>
              {form.message.length} / мін. 10 символів
            </span>
            {errors.message && (
              <span style={s.error}>⚠ {errors.message}</span>
            )}
          </div>

          <button type="submit" style={s.button}>
            Надіслати →
          </button>
        </form>
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    padding: "40px 20px",
  },
  card: {
    background: "#fff",
    borderRadius: 16,
    padding: "48px 40px",
    width: "100%",
    maxWidth: 500,
    boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    marginBottom: 32,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginBottom: 20,
  },
  label: {
    fontWeight: 600,
    fontSize: 14,
    color: "#334155",
    marginBottom: 6,
  },
  input: {
    padding: "12px 16px",
    border: "1.5px solid #e2e8f0",
    borderRadius: 10,
    fontSize: 15,
    outline: "none",
    transition: "border 0.2s",
    fontFamily: "inherit",
    color: "#1e293b",
  },
  inputErr: {
    borderColor: "#ef4444",
    backgroundColor: "#fff5f5",
  },
  textarea: {
    resize: "vertical",
  },
  counter: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "right",
    marginTop: 4,
  },
  error: {
    color: "#ef4444",
    fontSize: 13,
    marginTop: 5,
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#D4AF37",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 8,
    letterSpacing: 0.5,
  },
};