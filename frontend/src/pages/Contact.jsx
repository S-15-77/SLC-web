import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiClock } from 'react-icons/fi';
import '../styles/Contact.css';

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const contactInfo = [
  {
    icon: <FiMail size={24} />,
    label: 'Email',
    value: 'info@saintlaurentconsulting.com',
    href: 'mailto:info@saintlaurentconsulting.com',
  },
  {
    icon: <FiPhone size={24} />,
    label: 'Phone',
    value: '+1 (800) 000-0000',
    href: 'tel:+18000000000',
  },
  {
    icon: <FiClock size={24} />,
    label: 'Office Hours',
    value: 'Monday – Friday, 9:00 AM – 6:00 PM EST',
    href: null,
  },
];

export default function Contact() {
  const heroRef = useReveal(0.05);
  const formRef = useReveal(0.1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '' });
  };

  return (
    <div className="contact-page">

      {/* ── Hero ── */}
      <section className="ct-hero reveal-block" ref={heroRef}>
        <div className="ct-hero__left">
          <p className="ct-breadcrumb">
            <Link to="/">Home</Link>
            <span className="ct-breadcrumb__sep"> / </span>
            <span className="ct-breadcrumb__active">Contact</span>
          </p>
          <h1 className="ct-hero__heading">
            Let's Start a<br />Conversation
          </h1>
          <p className="ct-hero__desc">
            Whether you're ready to launch a project or just exploring possibilities,
            we'd love to hear from you. Our team of expert consultants is here to help
            you navigate the road ahead reach out and let's build something great together.
          </p>
        </div>

        <div className="ct-hero__right">
          <ul className="ct-info-list">
            {contactInfo.map((item, i) => (
              <li
                key={i}
                className="ct-info-item"
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <span className="ct-info-icon">{item.icon}</span>
                <div className="ct-info-body">
                  <span className="ct-info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="ct-info-value ct-info-link">{item.value}</a>
                  ) : (
                    <span className="ct-info-value">{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="ct-form-section reveal-block" ref={formRef}>
        <div className="ct-form-inner">
          <div className="ct-form-header">
            <h2 className="ct-form-title">Send Us a Message</h2>
            <p className="ct-form-sub">
              Fill in the details below and a member of our team will be in touch within one business day.
            </p>
          </div>

          <form className="ct-form" onSubmit={handleSubmit}>
            <div className="ct-form-row">
              <div className="ct-field">
                <label htmlFor="name">Full Name <span className="ct-required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="ct-field">
                <label htmlFor="email">Email Address <span className="ct-required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                />
              </div>
            </div>

            <div className="ct-form-row">
              <div className="ct-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="ct-field">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="ct-field">
              <label htmlFor="service">Service of Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="ai-innovation">AI Innovation</option>
                <option value="cloud-tech">Cloud Technologies</option>
                <option value="llms">Large Language Models</option>
                <option value="staffing">AI &amp; IT Staffing</option>
              </select>
            </div>

            <div className="ct-field">
              <label htmlFor="message">Message <span className="ct-required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your project or question…"
                required
              />
            </div>

            <button type="submit" className="ct-submit">
              Send Message
              <span className="ct-submit-arrow">↗</span>
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
