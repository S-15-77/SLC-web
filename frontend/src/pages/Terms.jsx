import { useEffect } from 'react';
import '../styles/Privacy.css';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <div className="container">
          <h1 className="privacy-title">Terms & Conditions</h1>
          <p className="privacy-last-updated">Last updated: April 28, 2026</p>
        </div>
      </header>

      <section className="privacy-content container">
        <div className="privacy-card">
          <div className="privacy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Saint Laurent Consulting ("SLC", "we", "our") website and any 
              related services, you agree to be bound by these Terms & Conditions. If you do not agree 
              to these terms, please do not use our website or services.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Services</h2>
            <p>
              Saint Laurent Consulting provides professional consulting, strategic advisory, 
              managed IT services, and technology solutions. All services are subject to the specific 
              terms outlined in individual service agreements or statements of work executed 
              between SLC and the client.
            </p>
          </div>

          <div className="privacy-section">
            <h2>3. Use of Website</h2>
            <p>
              You agree to use this website only for lawful purposes. Prohibited conduct includes but 
              is not limited to:
            </p>
            <ul>
              <li>Attempting to gain unauthorized access to any part of the website or its systems.</li>
              <li>Transmitting material that is defamatory, offensive, or otherwise objectionable.</li>
              <li>Using the website to distribute unsolicited commercial communications (SPAM).</li>
              <li>Interfering with the proper functioning of the website or its networks.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, software, and design 
              elements, is the property of Saint Laurent Consulting and is protected by United States 
              and international copyright, trademark, and intellectual property laws. You may not 
              reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </div>

          <div className="privacy-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, SLC shall not be liable for any indirect, 
              incidental, special, or consequential damages arising out of your use of our website. 
              Our total liability shall not exceed the amount paid by you, if any, for accessing 
              our services during the twelve (12) months preceding the claim.
            </p>
          </div>

          <div className="privacy-section">
            <h2>6. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws 
              of the <strong>United States</strong> and the state in which our primary operations are 
              conducted, without regard to conflict of law provisions.
            </p>
          </div>

          <div className="privacy-section">
            <h2>7. Disclaimer</h2>
            <p>
              The website and its content are provided on an "as is" and "as available" basis without 
              warranties of any kind. SLC does not warrant that the website will be uninterrupted, 
              error-free, or free of viruses.
            </p>
          </div>

          <div className="privacy-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have questions about these Terms & Conditions, please contact us at:
            </p>
            <ul>
              <li><strong>Saint Laurent Consulting</strong></li>
              <li><strong>Email:</strong> legal@saintlaurentconsulting.com</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
