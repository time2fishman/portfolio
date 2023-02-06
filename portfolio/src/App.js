import './App.css'
import logo from './img/adam-logo.svg'
import headshot from './img/headshot.jpeg'
import rockPaperScissors from './img/lapisPapyrusScapellus.png'
import spaceBattle from './img/space-battle.png'
import comingSoon from './img/coming-soon.svg'
import githubLogo from './img/github-logo.svg'
import linkedinLogo from './img/linkedin-logo.svg'
import { useState } from 'react'

function App() {
  // State
  const [spin, setSpin] = useState(false)


  // FUNCTIONS

  // Spins logo 360 degrees when double clicked
  const spinLogo = () => {
    setSpin(true)
    setTimeout(() => setSpin(false), 3000)
  }

  // // Randomly places hidden easter egg button on home screen each time page loads
  // const setButtonLocation = () => {
  //     let left = Math.floor(Math.random() * 500) + 1;
  //     let top = Math.floor(Math.random() * 500) + 1;
  //     easterEggButton.style.left = left + "px";
  //     easterEggButton.style.top = top + "px";
  // }

  // // Runs the setButtonLocation function automatically after the page loads.
  // window.onload = setButtonLocation

  // const foundEasterEgg = () => {
  //     alert("Congratulations! You found my easter egg!!!")
  // }

  // // EVENT LISTENERS

  // easterEggButton.addEventListener('click', foundEasterEgg)
  // logoButton.addEventListener('dblclick', spinLogo)

  return (
    <>
      <button className="easter-egg" type="button">Click Me!</button>

      <header className="header">
        {/* Logo */}
        <img className={`logo ${spin ? 'spin' : null}`} src={logo} onDoubleClick={spinLogo} alt="My personal logo" />
        <nav>
          <ul role="menubar" className="navigation-list">
            <li className="nav-list" role="presentation">
              {/* Home page link */}
              <a href="index.html" role="menuitem" className="navigation-list__item navigation-list__item--active">Home</a>
            </li>
            <li className="nav-list" role="presentation">
              {/* About page link */}
              <a href="about.html" role="menuitem" className="navigation-list__item">About</a>
            </li>
            <li className="nav-list" role="presentation">
              {/* Resume page link */}
              <a href="./resume.html" role="menuitem" className="navigation-list__item">Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile">
          {/* Portrait image */}
          <img className="profile__portrait" src={headshot} alt="Adam Martine Portrait" />
          <h1 id="index">Hello World!</h1>
          <p>
            My name is Adam Martinez. I am a <span className="profile-description">&lt;/web&gt;
            </span> developer from the United States.
          </p>
        </section>
        <section className="projects">
          <h2>Check out some of my projects below</h2>
          <a href="https://github.com/time2fishman/LapisPapyrusScalpellus" target="_blank" rel="noreferrer"><img className="project-item"
            src={rockPaperScissors} alt="Rock Paper Scissors" /></a>
          <a href="https://github.com/time2fishman/space-battle" target="_blank" rel="noreferrer"><img className="project-item"
            src={spaceBattle} alt="Space Battle" /></a>
          <img className="project-item" src={comingSoon} alt="TBD" />
          <img className="project-item" src={comingSoon} alt="TBD" />
        </section>
      </main>

      <footer className="page-footer">
        <h2>Find me on</h2>
        {/* GitHub image/link */}
        <a className="social-links" href="https://github.com/time2fishman" target="_blank" rel="noreferrer"><img src={githubLogo}
          alt="GitHub" /></a>
        {/* LinkedIn image/link */}
        <a className="social-links" href="https://www.linkedin.com/in/adam-martinez" target="_blank" rel="noreferrer"><img
          src={linkedinLogo} alt="LinkedIn" /></a>
        {/* Easter egg button */}
      </footer>
    </>
  )
}

export default App;
