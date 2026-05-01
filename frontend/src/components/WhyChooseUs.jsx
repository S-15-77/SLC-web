import { useEffect, useRef } from 'react';
import { FiZap, FiUsers, FiSettings, FiShield } from 'react-icons/fi';
import '../styles/WhyChooseUs.css';

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <FiZap color="#000" size={48} />,
      title: 'Innovation-Driven Solutions',
      description: 'Technology meets strategy for real business impact.'
    },
    {
      icon: <FiUsers color="#000" size={48} />,
      title: 'Global Talent Network',
      description: '15,000+ pre-screened professionals across AI and IT.'
    },
    {
      icon: <FiSettings color="#000" size={48} />,
      title: 'End-to-End Delivery',
      description: 'From design to deployment, we support every step.'
    },
    {
      icon: <FiShield color="#000" size={48} />,
      title: 'Client Commitment',
      description: 'Personalized support and measurable results.'
    }
  ];

  return (
    <section className="why-choose-us animate" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Saint Laurent Consulting</h2>
          <div className="divider-line"></div>
        </div>

        <div className="why-choose-grid-v2">
          {features.map((feature, idx) => (
            <div key={idx} className="feature">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}