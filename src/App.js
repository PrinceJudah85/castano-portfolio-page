import React from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { stacks } from './svg-icons';
import BurgerMenu from './components/BurgerMenu'; // Burger Menu Class Component
// import Burger from './components/Burger'; // Burger Menu Functional Component (Not in use)

function App () {
  return (
    <>
      <BurgerMenu pageWrapId={"page-wrap"} />
      <Header />
      <Navbar />
      <main id='page-wrap'>
        <About />
        <Skills stacks={stacks}/>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;