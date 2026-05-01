import { Link } from 'react-router-dom';
import '../styles/Services.css';

const IconAI = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const IconCloud = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17.5 19a5.5 5.5 0 0 0 0-11h-1.1a7 7 0 1 0-13.4 3h-.5a4.5 4.5 0 0 0 0 9h15z" />
  </svg>
);

const IconBrain = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44V7.5a2.5 2.5 0 0 1 4.5-1.5z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-2.44V7.5a2.5 2.5 0 0 0-4.5-1.5z" />
  </svg>
);

const IconPeople = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function Services() {
  const services = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation',
      icon: <IconAI />,
      description: 'Reimagine your business with Applied AI, Automation, and Generative AI.',
      link: '/services/ai-innovation'
    },
    {
      id: 'cloud-tech',
      title: 'Cloud Technologies',
      icon: <IconCloud />,
      description: 'Build secure, scalable, and cost-optimized cloud infrastructure across AWS, Azure, and GCP.',
      link: '/services/cloud-tech'
    },
    {
      id: 'llms',
      title: 'Large Language Models',
      icon: <IconBrain />,
      description: 'Leverage enterprise-grade LLMs for content generation and data intelligence.',
      link: '/services/llms'
    },
    {
      id: 'staffing',
      title: 'AI & IT Staffing',
      icon: <IconPeople />,
      description: 'Access top-tier professionals specializing in AI, Data, and Cloud Technologies.',
      link: '/services/staffing'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-split">
        <div className="services-image-container fade-in">
          <img src="/services.png" alt="Our services" className="services-image" />
        </div>
        
        <div className="services-content-container">
          <div className="services-inner">
            <h2 className="services-title fade-in">Our services</h2>
            <p className="services-subtitle fade-in">
              With experience across HR strategy, people management, and organizational development.
            </p>
            
            <div className="services-list">
              {services.map((service) => (
                <div key={service.id} className="service-item fade-in">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <div className="service-text">
                    <h3 className="service-item-title">{service.title}</h3>
                    <p className="service-item-description">{service.description}</p>
                    <Link to={service.link} className="service-learn-more">
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

