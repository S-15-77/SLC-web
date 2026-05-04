import { useState, useEffect, useRef } from 'react';
import { FiFileText, FiUser, FiTarget, FiCheckCircle, FiZap, FiGlobe, FiTrendingUp, FiX, FiUpload, FiCheck } from 'react-icons/fi';
import '../styles/Careers.css';

const LinkedInLogo = () => (
  <img src="/logos/LinkedIN Logo.svg" alt="LinkedIn" className="job-logo-img" />
);

const IndeedLogo = () => (
  <img src="/logos/Indeed Logo.svg" alt="Indeed" className="job-logo-img" />
);

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedIn: '',
    message: '',
    resume: null
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus('idle');
        setFormData({ fullName: '', email: '', linkedIn: '', message: '', resume: null });
      }, 2000);
    }, 1500);
  };

  return (
    <div className={`careers-v2 ${isModalOpen ? 'modal-active' : ''}`}>
      {/* ── Hero Section ── */}
      <section className="cr-hero">
        <div className="cr-hero__bg" style={{ backgroundImage: 'url("/careers-hero-bg.png")' }}></div>
        <div className="cr-hero__overlay"></div>
        <div className="cr-hero__content container">
          <h1 className="cr-hero__title">
            Grow Your Career With a Team That Defines<br/> What's Next.
          </h1>
          <p className="cr-hero__subtitle">
            Join a firm at the forefront of AI, Cloud, and Technology Talent. At Saint Laurent Consulting, your expertise shapes industries  and your growth is part of the mission.
          </p>
        </div>
      </section>

      {/* ── Our Mission Section (Beige) ── */}
      <section className="cr-split cr-mission reveal-block" ref={addToRefs}>
        <div className="container cr-split__inner">
          <div className="cr-split__text">
            <span className="cr-label">Our Mission</span>
            <div className="cr-mission__divider"></div>
            <h2 className="cr-title section-title">Empowering Careers Through Technology and Talent.</h2>
            <p className="cr-body">
              At Saint Laurent Consulting, we believe the right opportunity can change everything. We've built a firm where consultants, recruiters, and technology professionals come to do their most impactful work — placing elite talent, solving complex challenges, and helping organizations transform at the speed of innovation.</p>
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
          </div>
          <div className="cr-split__image cr-hiring__collage">
            <img src="/hiring-bg.png" alt="Hiring Process" className="img-back" />
            <img src="/careers-office.png" alt="Interview" className="img-front" />
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="cr-cta reveal-block" ref={addToRefs}>
        <div className="cr-cta__bg"></div>
        <div className="cr-cta__overlay"></div>
        <div className="container">
          <div className="cr-cta__content">
            <h2 className="cr-cta__title">Don't See Your Role?</h2>
            <p className="cr-cta__subtext">
              We're growing across consulting, technology, and talent. If you bring exceptional 
              skills and a high standard of work, we want to hear from you regardless of what's posted.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="cr-cta__btn">Reach Out Directly</button>
          </div>
        </div>
      </section>

      {/* ── Application Modal ── */}
      {isModalOpen && (
        <div className="cr-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="cr-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cr-modal-close" onClick={() => setIsModalOpen(false)}>
              <FiX />
            </button>
            
            <div className="cr-modal-header">
              <h2 className="cr-modal-title">Join the SLC Network</h2>
              <p>Tell us about your background and attach your resume. We'll be in touch if there's a match.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="cr-form-success">
                <div className="cr-success-icon"><FiCheck /></div>
                <h3>Application Sent</h3>
                <p>Thank you for reaching out. A member of our team will review your profile shortly.</p>
              </div>
            ) : (
              <form className="cr-modal-form" onSubmit={handleSubmit}>
                <div className="cr-form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    required 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="cr-form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="cr-form-group">
                  <label>LinkedIn Profile (Optional)</label>
                  <input 
                    type="url" 
                    name="linkedIn" 
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div className="cr-form-group">
                  <label>Resume / CV *</label>
                  <div className="cr-file-upload">
                    <input 
                      type="file" 
                      id="resume-upload" 
                      accept=".pdf,.doc,.docx" 
                      required 
                      onChange={handleFileChange}
                    />
                    <label htmlFor="resume-upload" className="cr-file-label">
                      <FiUpload />
                      <span>{formData.resume ? formData.resume.name : 'Upload PDF or Word Doc'}</span>
                    </label>
                  </div>
                </div>

                <div className="cr-form-group">
                  <label>Briefly, what are you looking for? *</label>
                  <textarea 
                    name="message" 
                    required 
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your expertise and goals..."
                  />
                </div>

                <button 
                  type="submit" 
                  className={`cr-form-submit ${formStatus === 'submitting' ? 'loading' : ''}`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}