import "./Skills.css";
import { SiHtml5, SiCss3, SiReact, SiTypescript, SiGit } from "react-icons/si";
function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-card">
        <li className="skills-item">
          <SiHtml5 className="item-icon html-icon" />
          <span className="item-name">HTML5</span>
        </li>

        <li className="skills-item">
          <SiCss3 className="item-icon css-icon" />
          <span className="item-name">CSS3</span>
        </li>

        <li className="skills-item">
          <SiTypescript className="item-icon typescript-icon" />
          <span className="item-name">TypeScript</span>
        </li>

        <li className="skills-item">
          <SiReact className="item-icon react-icon" />
          <span className="item-name">React</span>
        </li>

        <li className="skills-item">
          <SiGit className="item-icon git-icon" />
          <span className="item-name">Git</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
