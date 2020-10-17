import { features } from 'process';
import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Features from './Features';
import Team from './Team';

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