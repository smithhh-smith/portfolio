import { Link } from 'react-router-dom';
import './AboutMe.css';

export function AboutMe() {
  return (
    <>
      <div className="content-div">
        <div className="c-1">
          <div className="profile-card-wrapper">
            <div className="profile-card">
              <div className="profile-photo"></div>
              <h2 className="profile-name">Phoebe</h2>
              <div className="profile-divider"></div>
              <p className="profile-role">SOFTWARE DEVELOPER</p>
              <div className="social-row">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                  <i className="fa-brands fa-threads"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="c-2">
          <h1>Hello</h1>
          <p className="sub">Here's who I am & what I do</p>

          <div className="btn-group">
            <Link to="/resume" className="btn resume">RESUME</Link>
            <Link to="/projects" className="btn projects">PROJECTS</Link>
          </div>

          <p className="description">
            I'm a Computer Science graduate with a strong passion for building
            software that solves real problems. Throughout my studies, I
            developed a solid foundation in algorithms, data structures,
            object-oriented programming, and modern software development
            practices. I enjoy learning new technologies, working on hands-on
            projects, and continuously improving my skills.
          </p>

          <p className="description">
            I'm currently seeking a Software Developer Internship where I can
            contribute to real-world applications, collaborate with experienced
            engineers, and expand my knowledge in a professional environment.
            I'm motivated, quick to learn, and excited to take on new challenges
            that help me grow as a developer.
          </p>
        </div>
      </div>
    </>
  );
};