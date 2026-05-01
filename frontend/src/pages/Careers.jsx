import { useEffect, useRef } from 'react';
import { FiFileText, FiUser, FiTarget, FiCheckCircle, FiHome, FiHeart, FiBook, FiTrendingUp } from 'react-icons/fi';
import '../styles/Careers.css';

const LinkedInLogo = () => (
  <img src="/logos/LinkedIN Logo.svg" alt="LinkedIn" className="job-logo-img" />
);

const IndeedLogo = () => (
  <img src="/logos/Indeed Logo.svg" alt="Indeed" className="job-logo-img" />
);

export default function Careers() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="careers-v2">
      {/* ── Hero Section ── */}
      <section className="cr-hero">
        <div className="cr-hero__bg" style={{ backgroundImage: 'url("/careers-hero-bg.png")' }}></div>
        <div className="cr-hero__overlay"></div>
        <div className="cr-hero__content container">
          <h1 className="cr-hero__title">
            Grow Your Career With a Team<br />That Values Innovation.
          </h1>
          <p className="cr-hero__subtitle">
            Explore opportunities to grow, innovate, and make a real impact.<br />
            Join a team where your ideas, skills, and passion truly matter.
          </p>
        </div>
      </section>

      {/* ── Our Mission Section (Beige) ── */}
      <section className="cr-split cr-mission reveal-block" ref={addToRefs}>
        <div className="container cr-split__inner">
          <div className="cr-split__text">
            <span className="cr-label">Our Mission</span>
            <div className="cr-mission__divider"></div>
            <h2 className="cr-title">Empowering Growth Through Strategic Consulting</h2>
            <p className="cr-body">
              At Saint Laurent Consulting, we are dedicated to empowering our clients and consultants 
              through modern digital learning and AI driven solutions. Our goal is to create a platform 
              that inspires innovation, collaboration, and knowledge sharing. Join us in shaping the 
              future of enterprise consulting.
            </p>
          </div>
          <div className="cr-split__image">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="SLC Mission" />
          </div>
        </div>
      </section>

      {/* ── Why Work With Us (White) ── */}
      <section className="cr-why reveal-block" ref={addToRefs}>
        <div className="container">
          <h2 className="cr-title cr-title--center">Why Work With Us</h2>
          <div className="cr-benefits">
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiHome color="#000" size={32} /></div>
              <h3>Flexible/Remote</h3>
              <p>Work from anywhere with the flexibility that fits your lifestyle. We support remote work to help you stay productive.</p>
            </div>
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiHeart color="#000" size={32} /></div>
              <h3>Health and Wellness</h3>
              <p>Comprehensive health benefits and wellness programs to ensure you and your family are always taken care of.</p>
            </div>
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiBook color="#000" size={32} /></div>
              <h3>Learning Stipend</h3>
              <p>We invest in your growth with annual learning budgets, certifications, and access to premium training platforms.</p>
            </div>
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiTrendingUp color="#000" size={32} /></div>
              <h3>Career Growth</h3>
              <p>Clear paths for advancement and mentorship from industry leaders to help you reach your full potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Openings (Beige) ── */}
      <section className="cr-openings reveal-block" ref={addToRefs}>
        <div className="container">
          <h2 className="cr-title cr-title--center">Current Openings</h2>
          <p className="cr-subtitle--center">Please check out the job boards we have below for all opportunities.</p>
          <div className="cr-job-boards">
            <a href="https://www.linkedin.com/company/saintlaurent-consulting/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="cr-job-link">
              <LinkedInLogo />
            </a>
            <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer" className="cr-job-link">
              <IndeedLogo />
            </a>
          </div>
        </div>
      </section>

      {/* ── Hiring Process (White) ── */}
      <section className="cr-split cr-hiring reveal-block" ref={addToRefs}>
        <div className="container cr-split__inner">
          <div className="cr-split__text">
            <h2 className="cr-title">Our Hiring Process</h2>
            <p className="cr-body">
              Learn about the simple and transparent steps we follow to welcome new talent. 
              Our hiring process is designed to find passionate individuals who are ready to grow with us.
            </p>
            <ul className="cr-steps">
              <li>
                <span className="cr-step-icon"><FiFileText color="#000" size={22} /></span>
                <span className="cr-step-text">Application Review</span>
              </li>
              <li>
                <span className="cr-step-icon"><FiUser color="#000" size={22} /></span>
                <span className="cr-step-text">Initial Interview</span>
              </li>
              <li>
                <span className="cr-step-icon"><FiTarget color="#000" size={22} /></span>
                <span className="cr-step-text">Final Interview</span>
              </li>
              <li>
                <span className="cr-step-icon"><FiCheckCircle color="#000" size={22} /></span>
                <span className="cr-step-text">Offer & Onboarding</span>
              </li>
            </ul>
            <div className="cr-btn-wrapper">
              <a href="/contact" className="cr-btn">Join our team</a>
            </div>
          </div>
          <div className="cr-split__image cr-hiring__collage">
            <img src="/hiring-bg.png" alt="Hiring Process" className="img-back" />
            <img src="/careers-office.png" alt="Interview" className="img-front" />
          </div>
        </div>
      </section>
    </div>
  );
}