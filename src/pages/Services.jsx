import "./Service.css";

const Services = () => {
  return (
    <div className="services-container">
    
       
      <div className="service-cards">
        <div className="service-card">
          <div className="icon-container">
            <img src="https://img.icons8.com/ios-filled/50/000000/document.png" alt="Invoice Creation" />
          </div>
          <h3>Invoice Creation</h3>
          <p>Craft professional invoices with ease.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="PDF Export" />
          </div>
          <h3>PDF Export</h3>
          <p>Download your invoices as PDF files.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src="https://img.icons8.com/ios-filled/50/000000/visible.png" alt="Live Preview" />
          </div>
          <h3>Live Preview</h3>
          <p>See a real-time preview as you create.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Custom Input" />
          </div>
          <h3>Custom Input</h3>
          <p>Tailor invoices to your specific needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
