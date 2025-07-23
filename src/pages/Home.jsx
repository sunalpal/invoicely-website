import "../pages/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to <span className="brand">Invoicy</span></h1>
        <p>Create, customize, and download invoices in just a few clicks!</p>
        <button onClick={() => window.location.href = '/login'} className="cta-button">
          Get Started for Free
        </button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>🚀 Features</h2>
        <ul>
          <li>✅ Easy-to-use invoice builder</li>
          <li>✅ Customize sender and receiver info</li>
          <li>✅ Real-time invoice preview</li>
          <li>✅ Download as PDF instantly</li>
          <li>✅ Theme Toggle: Light & Dark mode</li>
          <li>✅ Secure Login / Signup</li>
          <li>✅ Language Support: English, Hindi & more</li>
        </ul>
      </section>

      
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>⚙️ How It Works</h2>
        <ol>
          <li> Signup and Login</li>
          <li> Fill in sender and receiver details</li>
          <li> Add items and tax if needed</li>
          <li> Preview & Download your Invoice</li>
        </ol>
      </section>

      {/* Call to Action Again */}
      <section className="final-cta">
        <h2>Ready to make your first invoice?</h2>
       <button onClick={() => window.location.href = '/login'} className="cta-button">
    Let’s Go!</button>
      </section>

      
    </div>
  );
};

export default Home;
