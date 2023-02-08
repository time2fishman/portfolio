// IMPORT CSS
import './Home.css'
// IMPORT HOOKS
import React, { useState, useEffect } from 'react';
// IMPORT IMGS
import headshot from '../../img/headshot.jpeg'
import rockPaperScissors from '../../img/lapisPapyrusScapellus.png'
import spaceBattle from '../../img/space-battle.png'
import comingSoon from '../../img/coming-soon.svg'

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
      <section className="projects">
        <h2>Check out some of my projects below</h2>
        {/* Link/Img to project */}
        <a href="https://github.com/time2fishman/LapisPapyrusScalpellus" target="_blank" rel="noreferrer"><img className="project-item"
          src={rockPaperScissors} alt="Rock Paper Scissors" /></a>
        {/* Link/Img to project */}
        <a href="https://github.com/time2fishman/space-battle" target="_blank" rel="noreferrer"><img className="project-item"
          src={spaceBattle} alt="Space Battle" /></a>
        {/* Coming Soon image */}
        <img className="project-item" src={comingSoon} alt="TBD" />
        <img className="project-item" src={comingSoon} alt="TBD" />
      </section>
    </main>
  );

};

export default Home;