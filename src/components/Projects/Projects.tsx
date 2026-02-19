import "./Projects.css";
import { translations } from "../../Data/Translations";
import type { Language } from "../../Data/Translations";

type ProjectsProps = {
  language: Language;
};

function Projects({ language }: ProjectsProps) {
  return (
    <section className="project-section">
      <h2 className="project-title">
        {translations[language].projectsSection.projectsTitle}
      </h2>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <img
          className="project-card"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxtqo6LA0NhwdRX3tNQb8hXF22BpbJcQiMg&s"
          alt="Project preview"
        />
      </a>
    </section>
  );
}
export default Projects;
