import { useParams, Link } from 'react-router-dom';
import '../styles/ServiceDetail.css';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  const serviceDetails = {
    'ai-innovation': {
      title: 'AI Innovation',
      icon: '🤖',
      backgroundImage: 'url("https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80")',
      description: 'Reimagine your business with Applied AI, Automation, and Generative AI.',
      fullDescription: 'Transform your organization with cutting-edge AI solutions. Our team specializes in:',
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
      icon: '☁️',
      backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80")',
      description: 'Build secure, scalable, and cost-optimized cloud infrastructure.',
      fullDescription: 'Modernize your infrastructure with enterprise-grade cloud solutions covering:',
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
      title: 'Large Language Models (LLMs)',
      icon: '🧠',
      backgroundImage: 'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80")',
      description: 'Leverage enterprise-grade LLMs for business automation.',
      fullDescription: 'Harness the power of LLMs to drive innovation in your organization:',
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
      icon: '👥',
      backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80")',
      description: 'Access top-tier professionals specializing in AI and Cloud.',
      fullDescription: 'Build world-class teams with our expert talent network:',
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
        'Flexible engagement models (FTE, contract, project-based)',
        '15,000+ professionals in our network',
        'Rapid placement within days, not weeks',
        'Ongoing support and team management'
      ],
      useCases: [
        'Building dedicated AI/ML teams',
        'Augmenting existing teams with specialists',
        'Short-term project expertise',
        'Technical leadership and mentorship',
        'Knowledge transfer and training'
      ]
    }
  };

  const service = serviceDetails[serviceId] || serviceDetails['ai-innovation'];

  return (
    <div className="service-detail">
      <section className="service-hero" style={{ backgroundImage: service.backgroundImage }}>
        <div className="service-hero-content">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      <section className="service-body">
        <div className="service-container">
          {/* Overview */}
          <div className="service-section">
            <h2>Overview</h2>
            <p>{service.overview}</p>
          </div>

          {/* Features/Capabilities */}
          <div className="service-section">
            <h2>{service.fullDescription}</h2>
            <div className="features-grid">
              {service.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="service-section">
            <h2>Key Benefits</h2>
            <ul className="benefits-list">
              {service.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="service-section">
            <h2>Use Cases</h2>
            <ul className="usecases-list">
              {service.useCases.map((useCase, idx) => (
                <li key={idx}>{useCase}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="service-cta">
            <h3>Ready to Get Started?</h3>
            <p>Let's discuss how we can help transform your business.</p>
            <Link to="/contact" className="btn btn-lg btn-primary">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
