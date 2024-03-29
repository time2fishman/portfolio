// IMPORT CSS
import './Footer.css'
//IMPORT IMGS
import githubLogo from '../../img/github-logo.svg'
import linkedinLogo from '../../img/linkedin-logo.svg'

const Footer = () => {

  return (
    <footer className="page-footer">
      <h2>Find me on</h2>
      {/* GitHub image/link */}
      <a className="social-links" href="https://github.com/time2fishman" target="_blank" rel="noreferrer"><img src={githubLogo}
        alt="GitHub" /></a>
      {/* LinkedIn image/link */}
      <a className="social-links" href="https://www.linkedin.com/in/adam-martinez" target="_blank" rel="noreferrer"><img
        src={linkedinLogo} alt="LinkedIn" /></a>
    </footer>
  );

};

export default Footer;