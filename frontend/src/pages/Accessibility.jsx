import { useEffect } from 'react';
import '../styles/Privacy.css'; // Reusing document styles for consistency

export default function Accessibility() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <div className="container">
          <h1 className="privacy-title">Accessibility Statement</h1>
          <p className="privacy-last-updated">Last updated: April 28, 2026</p>
        </div>
      </header>

      <section className="privacy-content container">
        <div className="privacy-card">
          <div className="privacy-section">
            <h2>Our Commitment</h2>
            <p>
              Saint Laurent Consulting is committed to ensuring digital accessibility for people of all abilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility 
              standards to ensure we provide equal access to all users.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Standards</h2>
            <p>
              We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA</strong>. 
              These guidelines explain how to make web content more accessible to people with disabilities, 
              including those with visual, auditory, physical, speech, cognitive, language, learning, 
              and neurological disabilities.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Measures Taken</h2>
            <p>Saint Laurent Consulting takes the following measures to ensure accessibility:</p>
            <ul>
              <li><strong>Semantic HTML:</strong> markup for proper screen reader navigation</li>
              <li><strong>Color Contrast:</strong> Sufficient color contrast ratios for text and interactive elements</li>
              <li><strong>Keyboard Navigation:</strong> Keyboard accessible navigation throughout the website</li>
              <li><strong>Alt Text:</strong> Descriptive alt text for all meaningful images</li>
              <li><strong>ARIA Labels:</strong> ARIA labels for interactive components and complex widgets</li>
              <li><strong>Responsive Design:</strong> Layouts that adapt to various screen sizes and zoom levels</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Known Limitations</h2>
            <p>
              While we strive to ensure full accessibility, some content may not yet be fully optimized. 
              We are actively working to identify and resolve any barriers. If you encounter any issues, 
              please let us know so we can address them promptly.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of the Saint Laurent Consulting website. 
              Please let us know if you encounter accessibility barriers:
            </p>
            <ul>
              <li><strong>Email:</strong> accessibility@saintlaurentconsulting.com</li>
              <li><strong>Response Time:</strong> We aim to respond to accessibility feedback within 5 business days.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Applicable Legislation</h2>
            <p>
              This accessibility statement aligns with the requirements of the <strong>Americans with Disabilities Act (ADA)</strong> 
               and <strong>Section 508</strong> of the Rehabilitation Act, along with applicable state level accessibility standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
