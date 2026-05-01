import { Link } from 'react-router-dom';
import '../styles/CTA.css';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-background"></div>
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content fade-in">
          <h2 className="cta-title">Ready to move forward with clarity and confidence?</h2>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

