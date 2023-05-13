import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './containers/About/About'
import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import Skills from './containers/Skills/Skills'
import Testimonial from './containers/Testimonial/Testimonial'
import Work from './containers/Work/Work'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App