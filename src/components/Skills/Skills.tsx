import "./Skills.css";
import { SiHtml5, SiCss3, SiReact, SiTypescript, SiGit } from "react-icons/si";
function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-card">
        <li>
          HTML5 <SiHtml5 />
        </li>
        <li>
          CSS <SiCss3 />
        </li>
        <li>
          TypeScript <SiTypescript />
        </li>
        <li>
          React <SiReact />
        </li>
        <li>
          Git <SiGit />
        </li>
      </ul>
    </section>
  );
}

export default Skills;
