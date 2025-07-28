import { useState } from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import FAQs from './components/FAQs'
import Contact from './components/ContactUs'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection id="home"/>
      <About id="about"/>
      <Services id="services"/>
      <Projects id="projects"/>
      <FAQs id="faqs"/>
      <Contact id="contact"/>
      <Footer/>
    </>
  )
}

export default App