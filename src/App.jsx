import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Soluctions from './components/soluctions/Soluctions';
import OnlineService from './components/onlineService/OnlineService';
import Location from './components/location/Location';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <Soluctions />
        <OnlineService />
        <Location />
      </main>
    </>
  );
}

export default App;
