import React from "react";
import "./Skills.css"; // We'll add a little CSS too

function Skills() {
  const skillList = [
    "React JS",
    "HTML",
    "CSS",
    "Bootstrap",
    "GitHub",
    "UI Design",
  ];

  return (
    <div className="skills-section text-center mb-5" data-aos="fade-up">
      <h3 className="text-white mb-3">Skills</h3>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {skillList.map((skill, index) => (
          <span key={index} className="badge bg-primary px-3 py-2 rounded-pill skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
