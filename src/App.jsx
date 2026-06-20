import "./App.css";

const products = [
  {
    id: 1,
    title: "Laptop",
    price: "₹54,999",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    id: 2,
    title: "Smartphone",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: 3,
    title: "Headphones",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
];

function App() {
  return (
    <div>

      {/* Header */}
      <header className="header">
        <div className="logo">amazon</div>

        <div className="search">
          <input type="text" placeholder="Search Amazon" />
          <button>🔍</button>
        </div>

        <div className="nav">
          <span>Account</span>
          <span>Orders</span>
          <span>🛒 Cart</span>
        </div>
      </header>

      

      {/* Hero */}
      <section className="hero">
        <h1>Amazon Clone</h1>
        <p>Shop Everything You Need</p>
      </section>

      {/* Products */}
      <section className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div>
          <h3>Connect</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

        <div>
          <h3>Help</h3>
          <p>Contact</p>
          <p>Support</p>
          <p>FAQ</p>
        </div>
      </footer>

    </div>
  );
}

export default App;