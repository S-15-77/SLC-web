import { useEffect, useRef } from 'react';
import '../styles/Partners.css';

export default function Partners() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const partners = [
    { name: 'AWS', logo: '/logos/1.png' },
    { name: 'Azure', logo: '/logos/2.svg' },
    { name: 'Shopify', logo: '/logos/3.svg' },
    { name: 'Google Cloud', logo: '/logos/4.svg' },
    { name: 'Salesforce', logo: '/logos/5.svg' },
    { name: 'Databricks', logo: '/logos/6.svg' }
  ];

  return (
    <section className="partners" ref={sectionRef}>
      <div className="container">
        <h2>Our Partners</h2>
        <div className="partners-grid-wrapper">
          <div className="partners-grid">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="partner-logo"
                style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
              >
                <img src={partner.logo} alt={partner.name} />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
