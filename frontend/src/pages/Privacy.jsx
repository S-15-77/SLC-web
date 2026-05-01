import { useEffect } from 'react';
import '../styles/Privacy.css';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <div className="container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-last-updated">Last updated: April 28, 2026</p>
        </div>
      </header>

      <section className="privacy-content container">
        <div className="privacy-card">
          <div className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Saint Laurent Consulting ("SLC", "we", "our", or "us") is committed to protecting the privacy and security 
              of the personal information entrusted to us by our clients, employees, contractors, and website visitors. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or engage with our services.
            </p>
            <p>
              Saint Laurent Consulting is headquartered in the United States and operates across multiple states, 
              providing professional consulting services to a diverse range of enterprises.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Legal Framework and Compliance</h2>
            <p>We comply with all applicable United States federal and state privacy legislation, including:</p>
            <ul>
              <li><strong>CCPA / CPRA</strong> — California Consumer Privacy Act and California Privacy Rights Act</li>
              <li><strong>CalOPPA</strong> — California Online Privacy Protection Act</li>
              <li><strong>VCDPA / CPA / CTPA</strong> — State-specific privacy laws (Virginia, Colorado, Connecticut)</li>
              <li><strong>COPPA</strong> — Children's Online Privacy Protection Act</li>
              <li><strong>GDPR</strong> — General Data Protection Regulation, where applicable to individuals in the European Economic Area</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. Information We Collect</h2>
            <h3>3.1 Information You Provide</h3>
            <p>
              Contact details (name, email, phone number, professional title) submitted through our contact forms or 
              service inquiries. Business information shared during the course of our consulting engagements.
            </p>
            <h3>3.2 Information Collected Automatically</h3>
            <p>
              IP address, browser type, device identifiers, and website usage data collected through cookies and 
              tracking technologies.
            </p>
          </div>

          <div className="privacy-section">
            <h2>4. How We Use Your Information</h2>
            <ul>
              <li>Providing and managing our consulting and professional services</li>
              <li>Processing business transactions and maintaining account records</li>
              <li>Responding to support requests and communication</li>
              <li>Ensuring security and preventing fraudulent activities</li>
              <li>Complying with federal and state legal obligations</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>5. Data Security</h2>
            <p>SLC implements industry-standard administrative, technical, and physical safeguards:</p>
            <ul>
              <li><strong>Encryption:</strong> Data is encrypted at rest and in transit using secure protocols.</li>
              <li><strong>Access Controls:</strong> Role-based access is strictly enforced for all client data.</li>
              <li><strong>SOC 2 Compliance:</strong> We follow best practices aligned with SOC 2 security standards.</li>
              <li><strong>Secure Infrastructure:</strong> All data is hosted on vetted, enterprise-grade cloud providers.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>6. Disclosure of Information</h2>
            <p>
              We do not sell your personal information to third parties. We may disclose information to service providers 
              who assist in our operations, or when required by law (e.g., subpoenas or court orders).
            </p>
          </div>

          <div className="privacy-section">
            <h2>7. Your Rights (State-Specific)</h2>
            <p>Depending on your state of residence (notably California), you may have the following rights:</p>
            <ul>
              <li><strong>Right to Know</strong> — Request information about what personal data we collect and share.</li>
              <li><strong>Right to Delete</strong> — Request that we delete personal information collected from you.</li>
              <li><strong>Right to Opt-Out</strong> — Request to opt-out of the "sale" or "sharing" of your personal information.</li>
              <li><strong>Right to Non-Discrimination</strong> — We will not discriminate against you for exercising your privacy rights.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal 
              information from children. If we discover a child under 13 has provided us with personal information, 
              we will delete it immediately.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact 
              our Privacy Compliance Team at privacy@saintlaurentconsulting.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
