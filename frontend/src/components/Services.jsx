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
      id: 'staffing',
      title: 'IT Staffing',
      icon: <IconPeople />,
      description: 'Talent is the most critical asset in a technology driven world. We connect organizations with rigorously vetted AI Engineers, Data Scientists, Cloud Architects, and more on your timeline, at your scale.',
      path: 'Contract → Permanent → Executive Search'
    },
    {
      id: 'ai-innovation',
      title: 'AI Innovation',
      icon: <IconAI />,
      description: 'From intelligent automation to Generative AI, we design and implement applied AI strategies that create measurable competitive advantage. Whether you\'re starting your AI journey or scaling enterprise-grade systems, we engineer solutions that work in the real world.',
      path: 'Strategy → Design → Deployment'
    },
    {
      id: 'cloud-tech',
      title: 'Cloud Technologies',
      icon: <IconCloud />,
      description: 'We architect secure, scalable, and cost-optimized cloud environments across AWS, Azure, and GCP. Whether you\'re migrating legacy systems or building cloud-native from scratch, our engineers deliver infrastructure that performs and adapts.',
      path: 'Migration → Modernization → Multi-Cloud Integration'
    },
    {
      id: 'llms',
      title: 'Large Language Models (LLMs)',
      icon: <IconBrain />,
      description: 'We help enterprises harness the power of LLMs from fine-tuning proprietary models to building responsible AI governance frameworks. Unlock intelligent content generation, process automation, and deep data intelligence, all aligned to your business objectives.',
      path: 'Custom LLMs → Prompt Engineering → AI Governance'
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
            <h2 className="services-title fade-in">Our Services</h2>
            <p className="services-subtitle fade-in">
              We bridge the gap between high-level strategy and technical execution, providing the expertise and the people to drive transformation.
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
                    <p className="service-item-path">{service.path}</p>
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
