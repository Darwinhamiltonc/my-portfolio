import "./Skills.css";
import { SiHtml5, SiCss3, SiReact, SiTypescript, SiGit } from "react-icons/si";
import type { IconType } from "react-icons";
import { translations } from "../../Data/Translations";
import type { Language } from "../../Data/Translations";

type Skill = {
  name: string;
  icon: IconType;
  className: string;
};
type SkillsProps = {
  language: Language;
};

const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5, className: "html-icon" },
  { name: "CSS3", icon: SiCss3, className: "css-icon" },
  { name: "TypeScript", icon: SiTypescript, className: "typescript-icon" },
  { name: "React", icon: SiReact, className: "react-icon" },
  { name: "Git", icon: SiGit, className: "git-icon" },
];

function Skills({ language }: SkillsProps) {
  return (
    <section className="skills-section">
      <h2 className="skills-title">
        {translations[language].skillsSection.skillsTitle}
      </h2>
      <ul className="skills-card">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <li key={skill.name} className="skills-item">
              <Icon className={`item-icon ${skill.className}`} />
              <span className="item-name">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
