import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about_section/About';
import { useState } from 'react';

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
    </div>
  );
}

export default App;
