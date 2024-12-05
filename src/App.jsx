import './App.css' 
import Container from './components/Container'
import Header from './components/Header.jsx'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <div className="flex items-center justify-center w-full h-screen">
      <Container>
        <Header></Header>
        <Routes>
          <Route path="/" element={ <Hero /> } />
          <Route path="/portfolio" element={ <Portfolio /> }></Route>
          <Route path="/services" element={ <Services /> }></Route>
          <Route path="/contact" element={ <Contact /> }></Route>
        </Routes>
      </Container>  
    </div>
 )
}

export default App
