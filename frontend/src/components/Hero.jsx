import { Link } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Building the bridge between Artificial Intelligence, Cloud Innovation, and Human Talent.
          </h1>
          <p className="hero-description fade-in">
            EMPOWER . INNOVATE . TRANSFORM
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/contact" className="btn btn-primary">
              Work With Us
            </Link>
            <a href="#services" className="btn btn-outline">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

