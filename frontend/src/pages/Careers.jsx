import { useEffect, useRef } from 'react';
import { FiFileText, FiUser, FiTarget, FiCheckCircle, FiZap, FiGlobe, FiTrendingUp } from 'react-icons/fi';
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
            <h2 className="cr-title section-title">Empowering Growth Through Strategic Consulting</h2>
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
          <h2 className="cr-title section-title section-title--center">Why Work With Us</h2>
          <div className="cr-benefits">
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiZap size={32} /></div>
              <h3>Work at the Frontier</h3>
              <p>AI, Cloud, and LLMs aren't talking points here they're the core of every engagement. You'll work on real problems with real stakes, alongside people who are genuinely at the cutting edge.</p>
            </div>
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiTarget size={32} /></div>
              <h3>A Culture Built on Ownership</h3>
              <p>We're a boutique firm. Your ideas are heard, your contributions are visible, and your growth isn't bottlenecked by layers of management. You move fast and you see impact.</p>
            </div>
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiGlobe size={32} /></div>
              <h3>Global Reach, Personal Feel</h3>
              <p>With operations across North America and Asia and a talent network spanning 15,000+ professionals, you'll gain exposure that goes far beyond a single market with the tight-knit energy of a high-performing team.</p>
            </div>
            <div className="cr-benefit-card">
              <div className="cr-icon"><FiTrendingUp size={32} /></div>
              <h3>We Invest in Your Growth</h3>
              <p>Whether you're building technical expertise, developing client relationships, or stepping into leadership we create the conditions for you to advance, not just perform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Openings (Beige) ── */}
      <section className="cr-openings reveal-block" ref={addToRefs}>
        <div className="container">
          <h2 className="cr-title section-title section-title--center">Current Openings</h2>
          <p className="cr-subtitle--center">We're always looking for exceptional people. Browse our active roles below and if you don't see a perfect match, reach out anyway. The right person always finds a home here.</p>
          <div className="cr-job-boards">
            <a href="https://www.linkedin.com/company/saintlaurent-consulting/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="cr-job-link">
              <LinkedInLogo />
            </a>
            <a href="https://ca.indeed.com/cmp/Saint-Laurent-Consulting?campaignid=mobvjcmp&from=mobviewjob&tk=1jnpl4duago6a802&fromjk=3aa9b0eacfd1263d" target="_blank" rel="noopener noreferrer" className="cr-job-link">
              <IndeedLogo />
            </a>
          </div>
        </div>
      </section>

      {/* ── Hiring Process (White) ── */}
      <section className="cr-split cr-hiring reveal-block" ref={addToRefs}>
        <div className="container cr-split__inner">
          <div className="cr-split__text">
            <h2 className="cr-title section-title">Our Hiring Process</h2>
            <p className="cr-body">
              We keep it straightforward, transparent, and respectful of your time. Here's what to expect when you apply to Saint Laurent Consulting.

            </p>
            <ul className="cr-steps">
              <li>
                <div className="cr-step-num">01</div>
                <div className="cr-step-content">
                  <h3>Apply</h3>
                  <p>Submit your application through LinkedIn, Indeed, or directly to our team. We review every submission personally—no automated rejections.</p>
                </div>
              </li>
              <li>
                <div className="cr-step-num">02</div>
                <div className="cr-step-content">
                  <h3>Discovery Call</h3>
                  <p>A short conversation with our talent team to understand your background, goals, and what you're looking for. We listen first.</p>
                </div>
              </li>
              <li>
                <div className="cr-step-num">03</div>
                <div className="cr-step-content">
                  <h3>In-Depth Interview</h3>
                  <p>Depending on the role, this may include a technical discussion, case review, or leadership conversation. We want to understand how you think, not just what you've done.</p>
                </div>
              </li>
              <li>
                <div className="cr-step-num">04</div>
                <div className="cr-step-content">
                  <h3>Offer & Onboarding</h3>
                  <p>When we find the right fit, we move quickly. Our onboarding is designed to get you contributing and feeling at home from day one.</p>
                </div>
              </li>
            </ul>
            <div className="cr-btn-wrapper">
              {/* <a href="/contact" className="cr-btn">Join our team</a> */}
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