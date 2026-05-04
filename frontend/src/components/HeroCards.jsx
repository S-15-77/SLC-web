import { Link } from 'react-router-dom';
import { FiSearch, FiBriefcase, FiUsers, FiStar } from 'react-icons/fi';
import '../styles/HeroCards.css';

export default function HeroCards() {
  const cards = [
    {
      icon: <FiSearch size={32} />,
      title: 'Find Talent',
      description: 'Access our network of 15,000+ pre-screened professionals.',
      btnText: 'Learn More',
      link: '/about'
    },
    {
      icon: <FiBriefcase size={32} />,
      title: 'Explore Services',
      description: 'Discover AI, Cloud, and staffing solutions tailored for you.',
      btnText: 'View Services',
      link: '#services'
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Join Our Team',
      description: 'Build your career with Saint Laurent Consulting.',
      btnText: 'View Careers',
      link: '/career'
    },
    {
      icon: <FiStar size={32} />,
      title: 'Get Started',
      description: 'Ready to transform your business? Let\'s talk.',
      btnText: 'Contact Us',
      link: '/contact'
    }
  ];

  return (
    <section className="hero-cards">
      <div className="container">
        <div className="hero-cards-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="hero-card">
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
    </section>
  );
}
