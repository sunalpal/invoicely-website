
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About <span className="brand">Invoicy</span></h1>
        <p>Your simple, fast, and reliable invoicing solution.</p>
      </header>

      <section className="about-content">
        <h2>📄 What is Invoicy?</h2>
        <p>
          Invoicy is a modern, web-based invoice generator designed for freelancers,
          small businesses, and professionals. With Invoicy, you can create professional-looking invoices
          in minutes—no account needed (but we recommend signing up to save your data!).
        </p>

        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to simplify the billing process for everyone.
          Whether you're a startup, freelancer, or agency, Invoicy helps you
          send clean, clear, and customizable invoices without the hassle.
        </p>

        <h2>🚀 Key Features</h2>
        <ul>
          <li>✅ User-friendly invoice builder</li>
          <li>✅ Real-time preview</li>
          <li>✅ Download invoices as PDF</li>
          <li>✅ Light & Dark mode support</li>
          <li>✅ Multi-language support (English, Hindi & more)</li>
          <li>✅ Secure login & user dashboard</li>
        </ul>

        <h2>🛡️ Why Choose Invoicy?</h2>
        <p>
          We believe that creating and sending invoices shouldn't be complicated.
          Invoicy provides a free, intuitive, and secure way to manage your billing—
          so you can focus on your work, not paperwork.
        </p>
      </section>
    </div>
  );
};

export default About;
