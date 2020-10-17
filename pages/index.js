import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Features from '../components/Features';
import Team from '../components/Team';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Main />
      <Features />
      <Team />
    </div>
  )
}

export default HomePage;