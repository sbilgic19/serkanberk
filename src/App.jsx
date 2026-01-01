import React from 'react'
import { SmoothScroll } from './components/animations'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Leadership from './components/leadership/Leadership'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
    </SmoothScroll>
  )
}

export default App
