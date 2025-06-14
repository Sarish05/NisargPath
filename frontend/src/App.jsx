import './App.css'
import Contact from './components/Contact'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Destinations/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App
