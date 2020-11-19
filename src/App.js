import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BurgerMenu from './components/BurgerMenu';

class App extends React.Component {

  // componentDidMount = () => {
  //   AOS.init({
  //     duration: 600,
  //   });
  // }

  render() {
    return (
      <>
        <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <Header />
          <Navbar />
          <main>
            <About />
            <Skills />
            {/* <div id="projects"></div> */}
            <Projects />
            <Contact />
            <Footer />
          </main>
      </>
    );
  }
}

export default App;