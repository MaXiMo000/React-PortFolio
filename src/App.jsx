import './app.scss';

import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

const App = () => {
  return <div>

    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>

    <section id='Services'>
      <Parallax type="services"/>
    </section>

    <section id='Services'>
      <Services/>
    </section>
    
    <section id='Portfolio'>
      <Parallax type="portfolio"/>
    </section>

    <Portfolio/>

    <section id='Contact'>
      <Contact/>
    </section>

  </div>;
};

export default App;