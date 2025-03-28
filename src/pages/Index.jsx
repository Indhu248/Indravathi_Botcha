
import React from 'react'
import { Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Footer from '../components/Footer'
import Achievements from './Achievements'

const Index = () => {
  return (
    <div className='relative h-[200vh] bg-slate-950'>
        <Home />
        <About />
        <Skills />
              <Projects />
              <Achievements />
              <Footer />
        {/* <Projects /> */}
    </div>
  )
}

export default Index
