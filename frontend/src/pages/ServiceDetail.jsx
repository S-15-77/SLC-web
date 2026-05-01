import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import '../styles/ServiceDetail.css';

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('revealed');
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function ServiceDetail() {
  const { serviceId } = useParams();

  const heroRef = useReveal(0.05);
  const overviewRef = useReveal(0.1);
  const featuresRef = useReveal(0.1);
  const benefitsRef = useReveal(0.1);
  const useCasesRef = useReveal(0.1);
  const ctaRef = useReveal(0.1);

  const serviceDetails = {
    'ai-innovation': {
      title: 'AI Innovation',
      subtitle: 'Applied Intelligence',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      description: 'Reimagine your business with Applied AI, Automation, and Generative AI.',
      overview: 'Artificial Intelligence is no longer just a competitive advantage—it\'s a necessity. We help enterprises harness AI to automate processes, unlock insights, and drive exponential growth.',
      features: [
        'Predictive Analytics & Machine Learning',
        'Generative AI Implementation',
        'Workflow Automation',
        'Custom AI Model Development',
        'AI Strategy & Consulting',
        'Model Optimization & Deployment'
      ],
      benefits: [
        'Increase operational efficiency by up to 40%',
        'Reduce costs through intelligent automation',
        'Accelerate decision-making with AI insights',
        'Stay ahead of market competition',
        'Unlock new revenue streams'
      ],
      useCases: [
        'Customer service automation with AI chatbots',
        'Predictive maintenance for manufacturing',
        'Fraud detection in financial services',
        'Personalized recommendations in retail',
        'Document processing and analysis'
      ]
    },
    'cloud-tech': {
      title: 'Cloud Technologies',
      subtitle: 'Modern Infrastructure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      description: 'Build secure, scalable, and cost-optimized cloud infrastructure.',
      overview: 'Migrate to the cloud with confidence. Our expert architects design, implement, and manage secure, scalable cloud infrastructure tailored to your business needs.',
      features: [
        'AWS, Azure & GCP Services',
        'Cloud Migration & Modernization',
        'Multi-Cloud Architecture',
        'Infrastructure as Code (IaC)',
        'Cloud Security & Compliance',
        'Cost Optimization'
      ],
      benefits: [
        'Reduce capital expenditure with pay-as-you-go pricing',
        'Global scalability and high availability',
        'Enhanced security and compliance',
        'Faster time-to-market for applications',
        'Improved disaster recovery capabilities'
      ],
      useCases: [
        'Legacy system migration to cloud',
        'Building serverless applications',
        'Multi-region deployment for global reach',
        'Kubernetes container orchestration',
        'Hybrid cloud integration strategies'
      ]
    },
    'llms': {
      title: 'Large Language Models',
      subtitle: 'Enterprise LLMs',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      description: 'Leverage enterprise-grade LLMs for business automation.',
      overview: 'Large Language Models are reshaping how businesses operate. From customer interactions to content creation, we help you deploy LLMs responsibly and effectively.',
      features: [
        'LLM Integration & Implementation',
        'Fine-tuning & Customization',
        'RAG (Retrieval-Augmented Generation)',
        'Prompt Engineering',
        'AI Governance & Safety',
        'Performance Optimization'
      ],
      benefits: [
        'Automate customer support at scale',
        'Generate high-quality content efficiently',
        'Improve accuracy with domain-specific training',
        'Ensure responsible AI with governance frameworks',
        'Reduce operational costs significantly'
      ],
      useCases: [
        'Intelligent customer support chatbots',
        'Automated content generation and summarization',
        'Code generation and documentation',
        'Resume screening and recruitment',
        'Financial analysis and reporting'
      ]
    },
    'staffing': {
      title: 'AI & IT Staffing',
      subtitle: 'Expert Talent',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
      description: 'Access top-tier professionals specializing in AI and Cloud.',
      overview: 'Finding the right talent is crucial for digital transformation. We connect you with vetted, experienced professionals who can accelerate your AI and cloud initiatives.',
      features: [
        'AI Engineers & Scientists',
        'Cloud Architects',
        'Data Engineers & Scientists',
        'DevOps & Infrastructure Experts',
        'Full-Stack Developers',
        'Technical Leadership'
      ],
      benefits: [
        'Access pre-screened, verified talent',
        'Flexible engagement models',
        '15,000+ professionals in our network',
        'Rapid placement within days',
        'Ongoing support and management'
      ],
      useCases: [
        'Building dedicated AI/ML teams',
        'Augmenting existing teams',
        'Short-term project expertise',
        'Technical leadership and mentorship',
        'Knowledge transfer and training'
      ]
    }
  };

  const service = serviceDetails[serviceId] || serviceDetails['ai-innovation'];

  return (
    <div className="sd-page">
      {/* ── Hero ── */}
      <section className="sd-hero reveal-block" ref={heroRef}>
        <div className="sd-hero__left">
          <span className="sd-label">{service.subtitle}</span>
          <h1 className="sd-hero__heading">
            {service.title.split(' ').length > 2 ? (
              <>
                {service.title.split(' ').slice(0, Math.ceil(service.title.split(' ').length / 2)).join(' ')}
                <br />
                {service.title.split(' ').slice(Math.ceil(service.title.split(' ').length / 2)).join(' ')}
              </>
            ) : (
              service.title.split(' ').map((word, i, arr) => (
                <span key={i}>
                  {word}
                  {i === 0 && arr.length > 1 && <br />}
                  {i === 0 && arr.length > 1 ? '' : ' '}
                </span>
              ))
            )}
          </h1>
          <p className="sd-hero__desc">
            {service.description}
          </p>
        </div>

        <div className="sd-hero__right">
          <div className="sd-hero__img-wrapper">
            <img
              src={service.image}
              alt={service.title}
              className="sd-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="sd-split reveal-block" ref={overviewRef}>
        <div className="sd-text">
          <h2 className="sd-section-title">Overview</h2>
          <p className="sd-section-body">
            {service.overview}
          </p>
          <div className="sd-features-list">
            {service.features.map((feature, idx) => (
              <div key={idx} className="sd-feature-item">
                <span className="sd-feature-icon"><FiArrowRight /></span>
                <span className="sd-feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sd-collage">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Data analytics"
            className="sd-collage__back"
          />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Team strategy"
            className="sd-collage__front"
          />
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="sd-benefits reveal-block" ref={benefitsRef}>
        <div className="sd-container">
          <h2 className="sd-section-title sd-title--center">Key Benefits</h2>
          <div className="sd-benefits-grid">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="sd-benefit-card">
                <div className="sd-check-circle">
                  <FiCheck />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="sd-usecases sd-split sd-split--flip reveal-block" ref={useCasesRef}>
        <div className="sd-split-inner">
          <div className="sd-text">
            <h2 className="sd-section-title">Use Cases</h2>
            <p className="sd-section-body">
              Discover how our {service.title} solutions are being applied across industries to drive meaningful results.
            </p>
            <ul className="sd-checklist">
              {service.useCases.map((useCase, idx) => (
                <li key={idx} className="sd-checklist__item">
                  <span className="sd-check">✔</span>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
          <div className="sd-image-container">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Collaboration"
              className="sd-side-img"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sd-cta reveal-block" ref={ctaRef}>
        <div className="sd-cta__inner">
          <h2 className="sd-cta__title">Ready to Transform Your Business?</h2>
          <p className="sd-cta__desc">
            Let's discuss how our expertise in {service.title} can help you achieve your strategic goals.
          </p>
          <Link to="/contact" className="sd-btn sd-btn--primary">
            Contact Our Experts <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

