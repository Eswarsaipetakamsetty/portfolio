import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import AnimatedBackground from './styles_components/AnimatedBackground'
import Footer from './styles_components/Footer'
import Navbar from './styles_components/Navbar'

function App() {

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ulh7yxm.css"></link>
      </head>
      <div style = {{width: '100%', height: '100%', position: 'relative'}}>
        < AnimatedBackground>
          <Navbar />
          <Home />
          <Projects />
          <AboutMe />
          <Footer />
        </ AnimatedBackground >
      </div>
    </>
  )
}

export default App
