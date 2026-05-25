import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Amenities from './components/Amenities';
import MediaShowcase from './components/MediaShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-dark relative overflow-x-hidden">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Services />
        <MediaShowcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
