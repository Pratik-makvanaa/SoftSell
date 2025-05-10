import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
<div 
  className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
  <div className="position-relative" style={{ height: '70px' }}>

  <a className="position-absolute top-0 start-0 p-3 navbar-brand d-flex align-items-center" href="#" >
    <img src="/logo.jpg" alt="SoftSell Logo" width="60px" className="logo me-2" />
    <span className="fs-4 fw-bold">SoftSell</span>
  </a>

  <button 
    className="position-absolute top-0 end-0 p-3 btn btn-outline-secondary me-2 mt-3 mr-2"
    onClick={() => setDarkMode(!darkMode)}
  >
  {darkMode ? '🌞 Light' : '🌙 Dark'}
  </button>

</div>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}



export default App;

