"use client"

import Hero from './section/Hero';
import Navbar from './components/Navbar';
import Main from './section/Big';
import Footer from './section/Footer';
import Contact from './section/Form';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
