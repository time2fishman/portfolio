// IMPORT CSS
import './Resume.css'
// IMPORT IMAGES
import resumePic from '../../img/adamMartinezResume (1).pdf'

const Resume = () => {

  return (
    <main>
      {/* Resume Pic */}
      <img className="resume-img" src={resumePic} alt="Resume" />
    </main>
  );

};

export default Resume;