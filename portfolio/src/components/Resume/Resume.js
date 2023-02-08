// IMPORT CSS
import './Resume.css'
// IMPORT IMAGES
import resumePic from '../../img/A.Martinez 2023 Resume.png'

const Resume = () => {

  return (
    <main>
      {/* Resume Pic */}
      <img className="resume-img" src={resumePic} alt="Resume" />
    </main>
  );

};

export default Resume;