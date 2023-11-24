import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Soluctions from './components/soluctions/Soluctions';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <Soluctions />
      </main>
    </>
  );
}

export default App;
