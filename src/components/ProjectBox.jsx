import './Projects.css';

export function ProjectBox({ title, role, paragraphs = [], imgSrc }) {
  return (
    <div className="project-box">
      <div className="project-desc">
        <div className="project-name">
          <div className="title">{title}</div>
          <div className="role">{role}</div>
        </div>
        <div className="project-content">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div className="project-img">
        <img src={imgSrc} />
      </div>
    </div>
  );
}
