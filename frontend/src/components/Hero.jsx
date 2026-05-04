import { Link } from 'react-router-dom';
import { FiSearch, FiBriefcase, FiUsers, FiStar } from 'react-icons/fi';
import '../styles/Hero.css';

export default function Hero() {
  const cards = [
    { icon: <FiSearch size={32} />, title: 'Find Talent', description: 'Access our network of 15,000+ pre-screened professionals.', btnText: 'Learn More', link: '/about' },
    { icon: <FiBriefcase size={32} />, title: 'Explore Services', description: 'Discover AI, Cloud, and staffing solutions tailored for you.', btnText: 'View Services', link: '#services' },
    { icon: <FiUsers size={32} />, title: 'Join Our Team', description: 'Build your career with Saint Laurent Consulting.', btnText: 'View Careers', link: '/career' },
    { icon: <FiStar size={32} />, title: 'Get Started', description: 'Ready to transform your business? Let\'s talk.', btnText: 'Contact Us', link: '/contact' }
  ];

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
          {/* <div className="hero-buttons fade-in">
            <Link to="/contact" className="btn btn-primary">
              Work With Us
            </Link>
            <a href="#services" className="btn btn-outline">
              Explore Our Services
            </a>
          </div> */}
        </div>

        <div className="hero-cards-wrapper">
          <div className="hero-cards-grid">
            {cards.map((card, idx) => (
              <div key={idx} className="hero-card fade-in">
                <div className="hero-card-icon">{card.icon}</div>
                <h3 className="hero-card-title">{card.title}</h3>
                <p className="hero-card-description">{card.description}</p>
                <Link to={card.link} className="hero-card-btn">
                  {card.btnText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

