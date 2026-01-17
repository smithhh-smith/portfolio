import "./Resume.css";
import ResumeBox from "./ResumeBox";

export function Resume() {
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
