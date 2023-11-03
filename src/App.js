import { useState } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about_section/About';
import Feature from './components/feature_section/Feature';
import CTA from './components/CTA/CTA';
import Footer from './components/footer/Footer';

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Nav toggle={toggleHandler} />
      <Header toggle={toggle} />
      <About />
      <Feature />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
