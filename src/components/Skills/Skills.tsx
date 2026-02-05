import "./Skills.css";
import { SiHtml5, SiCss3, SiReact, SiTypescript, SiGit } from "react-icons/si";
function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-card">
        <span className="skills-item">
          <li>
            <SiHtml5 />
            <span>HTML5</span>
          </li>
        </span>

        <span className="skills-item">
          <li>
            <SiCss3 />
            <span>CSS3</span>
          </li>
        </span>

        <span className="skills-item">
          <li>
            <SiTypescript />
            <span>TypeScript</span>
          </li>
        </span>

        <span className="skills-item">
          <li>
            <SiReact />
            <span>React</span>
          </li>
        </span>

        <span className="skills-item">
          <li>
            <SiGit />
            <span>Git</span>
          </li>
        </span>
      </ul>
    </section>
  );
}

export default Skills;
