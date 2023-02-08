// IMPORT CSS
import './Home.css'
// IMPORT HOOKS
import React, { useState, useEffect } from 'react';
// IMPORT IMGS
import headshot from '../../img/headshot.jpeg'
import agreeToDisagree from '../../img/agreeToDisagree.png'
import monstersRolodex from '../../img/monstersRolodex.png'
import beInspired from '../../img/BeInspired_ScreenShot.png'
import triviaTime from '../../img/triviaTime.png'
import weather from '../../img/weather.png'

const Home = () => {
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
    <main>
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
      <section className="profile">
        {/* Portrait image */}
        <img className="profile__portrait" src={headshot} alt="Adam Martine Portrait" />
        <h1 id="index">Hello World!</h1>
        <p>
          My name is Adam Martinez. I am a <span className="profile-description">&lt;/web&gt;
          </span> developer from the United States.
        </p>
      </section>
        <h2>Check out some of my projects below</h2>
      <section className='projects-section'>
        {/* <h4>Agree to Disagree</h4> */}
        <div className="projects">
          {/* Link/Img to project */}
          <a href="https://github.com/Celestial-Dwarf/agree-to-disagree" target="_blank" rel="noreferrer"><img className="project-item"
            src={agreeToDisagree} alt="Rock Paper Scissors" /></a>
        </div>
        {/* <h4>Monsters Rolodex</h4> */}
        <div className="projects">
          {/* Link/Img to project */}
          <a href="https://github.com/time2fishman/monsters-rolodex" target="_blank" rel="noreferrer"><img className="project-item"
            src={monstersRolodex} alt="Monsters Rolodex" /></a>
        </div>
        {/* <h4>Be Inspired</h4> */}
        <div className="projects">
          {/* Link/Img to project */}
          <a href="https://github.com/time2fishman/beinspired" target="_blank" rel="noreferrer"><img className="project-item"
            src={beInspired} alt="Be Inspired" /></a>
        </div>
        {/* <h4>Trivia Time</h4> */}
        <div className="projects">
          {/* Link/Img to project */}
          <a href="https://github.com/time2fishman/triva-time" target="_blank" rel="noreferrer"><img className="project-item"
            src={triviaTime} alt="Trivia Time" /></a>
        </div>
        {/* <h4>Weather App</h4> */}
        <div className="projects">
          {/* Link/Img to project */}
          <a href="https://github.com/time2fishman/AaronWeatherAssessment/tree/adam" target="_blank" rel="noreferrer"><img className="project-item"
            src={weather} alt="Weather App" /></a>
        </div>
      </section>
    </main>
  );

};

export default Home;