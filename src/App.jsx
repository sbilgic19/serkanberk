import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <> 
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App