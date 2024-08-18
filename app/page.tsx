"use client"

import Hero from './section/Hero';
import Navbar from './components/Navbar';
import Main from './section/Big';
import Footer from './section/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
