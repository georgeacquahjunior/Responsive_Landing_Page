import React, { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/hero';
import Client from './components/Client/Client';
import Footer from './components/footer/footer';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Client />
      <Footer />
    </div>
  )
}

export default App
