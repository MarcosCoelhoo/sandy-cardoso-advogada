import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Soluctions from './components/soluctions/Soluctions';
import OnlineService from './components/onlineService/OnlineService';
import Location from './components/location/Location';
import About from './components/about/About';
import Footer from './components/footer/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
      // startEvent: 'load',
    });
  }, []);

  return (
    <>
      <Header />

      <Hero />

      <main>
        <Soluctions />
        <OnlineService />
        <Location />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;
