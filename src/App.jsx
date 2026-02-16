import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import CapstoneShowcase from './components/CapstoneShowcase'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Explorations from './components/Explorations'
import CoCurricular from './components/CoCurricular'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Research />
      <CapstoneShowcase />
      <Experience />
      <Education />
      <Resume />
      <CoCurricular />
      <Explorations />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
