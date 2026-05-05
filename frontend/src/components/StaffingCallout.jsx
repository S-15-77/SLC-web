import { FiTarget, FiZap, FiGlobe } from 'react-icons/fi';
import '../styles/StaffingCallout.css';

export default function StaffingCallout() {
  return (
    <section className="staffing-callout">
      <div className="container">
        <div className="staffing-callout__top">
          <div className="staffing-callout__content">
            <span className="staffing-label">Talent Excellence</span>
            <h2 className="staffing-title">The Right People<br />Are the Strategy.</h2>
            <p className="staffing-body">
              Technology is only as powerful as the team behind it. Saint Laurent Consulting gives you direct access 
              to a curated network of over <strong>15,000 pre-screened AI, Data, and Cloud professionals</strong> 
              ready to integrate into your organization at any scale, on any timeline.
            </p>
            <p className="staffing-punchline">
              We don't just send you résumés. We send you the right person.
            </p>
          </div>
          <div className="staffing-callout__image-wrapper">
             <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop" alt="Elite Talent" className="staffing-image" />
             <div className="staffing-stat-badge">
               <span className="stat-number">15K+</span>
               <span className="stat-label">Vetted Experts</span>
             </div>
          </div>
        </div>

        <div className="staffing-grid">
          <div className="staffing-point">
            <div className="staffing-point-icon"><FiTarget /></div>
            <h3>Precision Matching</h3>
            <p>We take time to understand your culture, your stack, and your goals then we find professionals who fit all three.</p>
          </div>
          <div className="staffing-point">
            <div className="staffing-point-icon"><FiZap /></div>
            <h3>Speed Without Compromise</h3>
            <p>Our pipeline is always active. When you need talent, we move fast without cutting corners on quality.</p>
          </div>
          <div className="staffing-point">
            <div className="staffing-point-icon"><FiGlobe /></div>
            <h3>National Reach</h3>
            <p>With a network spanning every major tech hub in the United States, we source elite talent from coast to coast to meet your specific regional or remote needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
