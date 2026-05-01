import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Partners from '../components/Partners';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Intro />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Partners />
    </div>
  );
}
