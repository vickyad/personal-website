import React from 'react'

import './App.css'

import Header from './components/header/Header'
import {ThemeSwitch} from './components/themeSwitch/ThemeSwitch'
import NavBar from './components/navBar/NavBar'
import BackTop from './components/backTop/BackTop'
import AboutMe from './components/aboutMe/AboutMe'
import Habilities from './components/habilities/Habilities'
import Portifolio from './components/portifolio/Portifolio'
import Experience from './components/Experience'
import Sorry from './components/Sorry'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ThemeSwitch />
      <NavBar />
      <main>
        <AboutMe />
        <BackTop />
        <Habilities />
        <Portifolio />
        <Experience />
        <Sorry />
      </main>
      <Footer />
    </div>
  );
}

export default App
