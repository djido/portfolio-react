import React, { Component } from 'react';

import portfolioData from './data/portfolio';

import Projects from './components/projects/Projects';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './sass/main.scss';


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero portfolioData={portfolioData} />
        <About portfolioData={portfolioData} />
        <Skills portfolioData={portfolioData} />
        <Projects portfolioData={portfolioData} />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
