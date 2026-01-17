import './Projects.css';
import hms from '../assets/hms.jpeg';
import { ProjectBox } from './ProjectBox';

export function Projects() {
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