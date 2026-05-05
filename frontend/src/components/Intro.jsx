import '../styles/Intro.css';

export default function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-inner">
          <div className="intro-left">
            <span className="intro-label">Who We Are</span>
            <div className="intro-accent-line"></div>
          </div>
          <div className="intro-right">
            <h2 className="intro-title fade-in">
              <span className="intro-title--brand">Saint Laurent Consulting</span>
              <br />is a boutique technology consulting and talent firm built for organizations that refuse to be average.
            </h2>
            <div className="intro-divider"></div>
            <p className="intro-text fade-in">
              We deliver AI-powered solutions, cloud transformation strategies, and access to an elite global professional network — all under one roof.
            </p>
            <p className="intro-text intro-text--emphasis fade-in">
              Whether you need to solve a complex technology challenge or hire the expert who can, we are the call you make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

