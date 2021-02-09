import React from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Burger from './components/Burger';
import { stacks } from './svg-icons';
import BurgerMenu from './components/BurgerMenu'; // Burger Menu Class Component

function App () {
  return (
    <>
      {/* <div className='app'> */}
        {/* <div id="outer-container"> */}
          <BurgerMenu pageWrapId={"page-wrap"} />
          <Header />
          <Navbar />
        {/* </div> */}
          <main id='page-wrap'>
            <About />
            <Skills stacks={stacks}/>
            <Projects />
            <Contact />
            <Footer />
          </main>
      {/* </div> */}
  </>
    );
}

export default App;