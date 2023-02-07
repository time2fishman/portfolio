import React from 'react';
import headshot from '../img/headshot.jpeg'
import rockPaperScissors from '../img/lapisPapyrusScapellus.png'
import spaceBattle from '../img/space-battle.png'
import comingSoon from '../img/coming-soon.svg'

const Home = () => {
  return (
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
  );
};

export default Home;