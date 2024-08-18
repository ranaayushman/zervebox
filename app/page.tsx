"use client"

import Hero from './section/Hero';
import Navbar from './components/Navbar';
import Main from './section/Big';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
};

export default Home;
