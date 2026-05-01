import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

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

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '80+',  label: 'Expert Consultants' },
  { number: '200+', label: 'Client Engagements' },
  { number: '12',   label: 'Industry Awards' },
];

const missionPoints = [
  'Fostering AI-Driven Business Transformation',
  'Delivering Cloud-First Scalable Solutions',
  'Customer-Centric Consulting Approach',
  'Building Long-Term Strategic Partnerships',
];

const visionPoints = [
  'Leading with Emerging Technology Innovation',
  'Pioneering Ethical AI & Data Practices',
  'Empowering Teams Through Knowledge Transfer',
  'Creating Lasting Enterprise Value',
];

export default function About() {
  const heroRef    = useReveal(0.05);
  const quoteRef   = useReveal(0.1);
  const statsRef   = useReveal(0.1);
  const missionRef = useReveal(0.1);
  const visionRef  = useReveal(0.1);

  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="ab-hero reveal-block" ref={heroRef}>
        <div className="ab-hero__left">
          <p className="ab-breadcrumb">
            <Link to="/">Home</Link>
            <span className="ab-breadcrumb__sep"> / </span>
            <span className="ab-breadcrumb__active">About</span>
          </p>
          <h1 className="ab-hero__heading">
            Crafting Excellence<br />Together
          </h1>
          <p className="ab-hero__desc">
            At Saint Laurent Consulting we believe in the power of collaboration to achieve
            outstanding results. With a team of skilled professionals and a commitment to
            quality, we work hand in hand with our clients to bring their ideas to life.
            Together, we create strategies and solutions that stand the test of time.
          </p>
        </div>

        <div className="ab-hero__right">
          <img
            src="/new-img/professional-boardroom.jpg"
            alt="Professional boardroom meeting"
            className="ab-hero__img"
          />
          <div className="ab-badge">
            <svg viewBox="0 0 100 100" className="ab-badge__ring">
              <defs>
                <path id="badgePath" d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
              </defs>
              <text>
                <textPath href="#badgePath" startOffset="0%">
                  ★ Saint Laurent Consulting ★ Est. 2020 ★&nbsp;
                </textPath>
              </text>
            </svg>
            <span className="ab-badge__icon">↗</span>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="ab-quote reveal-block" ref={quoteRef}>
        <div className="ab-quote__inner">
          <p className="ab-quote__text">
            At Saint Laurent Consulting we are committed to revolutionizing the way enterprises
            adopt technology — with innovative, scalable, and cost effective solutions. With a
            proven track record of delivering exceptional results, we combine state of the art
            technology,{' '}
            <span className="ab-quote__fade">
              deep industry expertise, and a customer centric approach to bring visions to life.
            </span>
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="ab-stats reveal-block" ref={statsRef}>
        <div className="ab-stats__inner">
          {stats.map((s, i) => (
            <div key={i} className="ab-stat" style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className="ab-stat__num">{s.number}</span>
              <span className="ab-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="ab-split reveal-block" ref={missionRef}>
        <div className="ab-collage">
          <img
            src="/new-img/headway-jfR5wu2hMI0-unsplash.jpg"
            alt="Strategy session"
            className="ab-collage__back"
          />
          <img
            src="/new-img/pexels-proxyclick-2451566.jpg"
            alt="Team at work"
            className="ab-collage__front"
          />
        </div>
        <div className="ab-text">
          <h2 className="ab-section-title">Our Mission</h2>
          <p className="ab-section-body">
            To provide exceptional consulting services that exceed client expectations through
            innovation, quality craftsmanship, and a commitment to excellence. We aim to build
            lasting relationships and create digital environments that enhance businesses and
            communities. Through precision, expertise, and a customer centric approach, we strive
            to exceed expectations in every engagement — building a legacy of trust.
          </p>
          <ul className="ab-checklist">
            {missionPoints.map((pt, i) => (
              <li key={i} className="ab-checklist__item" style={{ transitionDelay: `${0.2 + i * 0.08}s` }}>
                <span className="ab-check">✔</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="ab-split ab-split--flip reveal-block" ref={visionRef}>
        <div className="ab-split-inner">
          <div className="ab-text">
            <h2 className="ab-section-title">Our Vision</h2>
            <p className="ab-section-body">
              At Saint Laurent Consulting, our vision is to redefine the future of enterprise
              technology through innovation, sustainability, and excellence. We aim to create
              solutions that not only inspire but also contribute to the well being of businesses
              and communities. By embracing cutting edge AI and cloud native practices, we strive
              to lead the industry toward a smarter, more agile future delivering value, quality,
              and longevity in every project we undertake.
            </p>
            <ul className="ab-checklist">
              {visionPoints.map((pt, i) => (
                <li key={i} className="ab-checklist__item" style={{ transitionDelay: `${0.2 + i * 0.08}s` }}>
                  <span className="ab-check">✔</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="ab-collage ab-collage--r">
            <img
              src="/new-img/pexels-kampus-8353803.jpg"
              alt="Technology leadership"
              className="ab-collage__back"
            />
            <img
              src="/new-img/krakenimages-376KN_ISplE-unsplash.jpg"
              alt="Consulting work"
              className="ab-collage__front"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
