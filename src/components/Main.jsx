import ProductCard from './ProductCard';

const Main = () => {
  const products = [
     { id: 1, name: "Золота каблучка", price: 15000, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSBG54vDGPsGqlSMJPzuAg0JXmCZqjsScb95d2Ejtm4I7KvZ-l-d-BMhSHOFNdpLeRsb_6-u3uVu_3w7HlYIUJd69P9rxKAAmF6HyDOJtKKIt39RJ8IrDN1F9Oxf6EFtbtURTr9ZL0&usqp=CAchttps://minimal.com.ua/wp-content/uploads/2024/01/k611zh-br-dm-m-800x800.jpg" },
    { id: 2, name: "Класичне кольє", price: 25000, image: "https://img.ukrzoloto.ua/images/pr/520_520/c6b84dfbfe95c5f2cc6b091b8882ec07/1769460786/UZ31735191_000176405.webp" },
    { id: 3, name: "Сережки 'Грація'", price: 8000, image: "https://goldensilver.ua/image/cache/catalog/deva1/5/TR-02-00015PZ-90-1000x1000.jpg" }
  ];

  return (
    <main style={{ padding: '60px 8%', backgroundColor: '#f8fafc', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '0 0 10px', letterSpacing: '1px' }}>Каталог</h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Витонченість у кожній деталі. 
        Ми поєднуємо класичну ювелірну майстерність із сучасними трендами, щоб створювати прикраси, 
        які стають частиною вашої історії.</p>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', animation: 'fadeIn 0.5s ease-in' }}>
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </main>
  );
};

export default Main;

   