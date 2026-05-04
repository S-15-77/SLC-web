import { Link } from 'react-router-dom';
import '../styles/CTA.css';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-background"></div>
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content fade-in">
          <h2 className="cta-title">Ready to Build What's Next?</h2>
          <p className="cta-description">
            Whether you're scaling AI capabilities, modernizing your cloud infrastructure, or building a world-class technology team — Saint Laurent Consulting is your edge.
          </p>
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

