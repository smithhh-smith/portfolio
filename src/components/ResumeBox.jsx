import "./Resume.css";

export function ResumeBox({ heading, titleIcon, titleText, badges = [] }) {
  return (
    <div className="box">
      <h1>{heading}</h1>

      <div className="box-details">
        <div className="box-title">
          <i className={titleIcon}></i> {titleText}
        </div>

        <div className="box-badges">
          {badges.map((b, idx) => (
            <div key={idx}>
              {b.icon && <i className={b.icon}></i>}
              {b.icon && "\u00A0"}
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeBox;
