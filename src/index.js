import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML",
    level: "beginner",
    color: "lightblue",
  },
  {
    skill: "CSS",
    level: "beginner",
    color: "red",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "orange",
  },
  {
    skill: "React",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "SASS",
    level: "intermediate",
    color: "pink",
  },
  {
    skill: "Bootstrap",
    level: "intermediate",
    color: "purple",
  },
  {
    skill: "Photoshop",
    level: "intermediate",
    color: "violet",
  },
  {
    skill: "Node",
    level: "advanced",
    color: "Green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="image">
      <img src="images/profilephotomini.jpg" alt="" />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Cameron Howze</h1>
      <p>
        Full-stack web developer and US veteran. When I am not coding, I love
        spending time with my amazing son
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "😤"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
