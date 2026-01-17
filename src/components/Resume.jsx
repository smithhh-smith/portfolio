import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import "./Resume.css";
import ResumeBox from "./ResumeBox";

export function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.set('.category-div', { opacity: 0, scale: 0.95 });

    const tl = gsap.timeline();

    tl.to('.category-div', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    }, 0);
  }, []);

  const handleNavigate = (to) => {
    const exitTl = gsap.timeline();

    exitTl.to('.category-div', {
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
    <div className="category-div">
      <ResumeBox
        heading="Education"
        titleIcon="fa-solid fa-award"
        titleText="Academic Achievements"
        badges={[
          { icon: "fa-solid fa-graduation-cap", text: "Bachelor in Computer Science" },
          { icon: "fa-solid fa-check", text: "Relevant coursework in Web Development" }
        ]}
      />
    </div>
  );
}
