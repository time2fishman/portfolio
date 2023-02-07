import './App.css'


import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About/About'
import Resume from './components/Resume'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  // STATE
  const [position, setPosition] = useState({
    left: 0,
    top: 0
  });

  // USEEFFECT

  // Runs randomButtonPosition() function once on page load
  useEffect(() => {
    randomButtonPosition()
  }, [])

  // FUNCTIONS

  // Randomly assign postion state data numbers so they can be set as 
  // left and top styles on easterEgg button below.
  const randomButtonPosition = () => {
    setPosition({
      left: Math.floor(Math.random() * 500 + 1),
      top: Math.floor(Math.random() * 500 + 1)
    });
  }

  // Alert pops up with message when easter egg button is clicked
  const foundEasterEgg = () => {
    alert("Congratulations! You found my easter egg!!!")
  }

  return (
    <>
      <button
        className='easter-egg'
        onClick={foundEasterEgg}
        style={{
          left: position.left,
          top: position.top
        }}
      >
        Click Me!
      </button>

      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />



      
    </>
  )
}

export default App;
