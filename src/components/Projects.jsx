import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Projects.css';
import hms from '../assets/hms.jpeg';
import { ProjectBox } from './ProjectBox';

export function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.set('.projects-div', { opacity: 0, scale: 0.95 });

    const tl = gsap.timeline();

    tl.to('.projects-div', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    }, 0);
  }, []);

  const handleNavigate = (to) => {
    const exitTl = gsap.timeline();

    exitTl.to('.projects-div', {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power3.in'
    });

    exitTl.then(() => {
      navigate(to);
    });
  };

  return (
    <>
      <div className="projects-div">
        <div className="pjd-1">
          <h2>
            <i className="fa-solid fa-diagram-project"></i> Projects I have worked
            on
          </h2>
        </div>
        <div className="pjd-2">
          <ProjectBox
            title="Hotel Management System"
            role="Worked as Prototype Designer"
            paragraphs={[
              "I have worked on the Hotel Management System. It's a group project and I was in charge of designing prototype. I used the Figma as a prototyping tool and I made several layouts for each web page including the payment sections.",
              "I have worked on the Hotel Management System. It's a group project and I was in charge of designing prototype. I used the Figma as a prototyping tool and I made several layouts for each web page including the payment sections."
            ]}
            imgSrc={hms}
          />
        </div>
      </div>
    </>
  );
};