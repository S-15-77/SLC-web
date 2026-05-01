import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/favicon.ico" alt="SLC Logo" className="brand-icon" />
          Saint Laurent Consulting
        </Link>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Careers
            </Link>
          </li>
          <div className="navbar-actions">
            <Link to="/contact" className="contact-link" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </ul>



        <button
          className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

