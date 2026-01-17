import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './AboutMe.css';

export function AboutMe() {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.set('.c-1', { opacity: 0, scale: 0.95 });
    gsap.set('.profile-card-wrapper', { opacity: 0, x: -100 });
    gsap.set('.c-2 h1', { opacity: 0, y: 30 });
    gsap.set('.c-2 .sub', { opacity: 0, y: 20 });
    gsap.set('.btn-group', { opacity: 0, y: 20 });
    gsap.set('.description', { opacity: 0, y: 20 });

    const tl = gsap.timeline();

    tl.to('.c-1', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    }, 0);

    tl.to('.profile-card-wrapper', {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out'
    }, 0.2);

    tl.to('.c-2 h1', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, 0.4);

    tl.to('.c-2 .sub', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, 0.6);

    tl.to('.btn-group', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, 0.8);

    tl.to('.description', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, 1);
  }, []);

  const handleNavigate = (to) => {
    const exitTl = gsap.timeline();

    exitTl.to(['.c-1', '.profile-card-wrapper', '.c-2 h1', '.c-2 .sub', '.btn-group', '.description'], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.in'
    });

    exitTl.then(() => {
      navigate(to);
    });
  };

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
            <button onClick={() => handleNavigate('/resume')} className="btn resume">RESUME</button>
            <button onClick={() => handleNavigate('/projects')} className="btn projects">PROJECTS</button>
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