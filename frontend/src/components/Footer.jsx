import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-bg-text">Saint Laurent Consulting</div> */}
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <h2 className="footer-logo">
              <div className="footer-brand-icon-wrap">
                <img src="/logos/slc.png" alt="SLC Logo" className="footer-brand-icon" />
              </div>
              Saint Laurent Consulting
            </h2>
            <p className="footer-tagline">
              Supporting leaders with thoughtful, people-centered HR solutions.
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="footer-heading">Quick Menu</h4>
              <ul className="footer-links">
                 <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/career">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Social</h4>
              <ul className="footer-links">
                <li><a href="https://www.linkedin.com/company/saintlaurent-consulting/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIN</a></li>
                <li><a href="https://ca.indeed.com/cmp/Saint-Laurent-Consulting?campaignid=mobvjcmp&from=mobviewjob&tk=1jnpl4duago6a802&fromjk=3aa9b0eacfd1263d" target="_blank" rel="noopener noreferrer">Indeed</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/terms">Terms and Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Saint Laurent Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
