import "./Experience.css";
import { translations } from "../../Data/Translations";
import type { Language } from "../../Data/Translations";
type ExperienceProps = {
  language: Language;
};
export default function Experience({ language }: ExperienceProps) {
  return (
    <section className="experience-section">
      <h2 className="experience-title">
        {translations[language].experienceSection.experienceTitle}
      </h2>

      <div className="experience-list">
        <h3 className="subtitle">
          {translations[language].experienceSection.experienceSubtitle}
        </h3>
        <ul>
          {translations[language].experienceSection.experienceList.map(
            (item, index) => (
              <li key={index}>{item}</li>
            ),
          )}
        </ul>
      </div>

      <div className="experience-list">
        <h3 className="subtitle">
          {translations[language].experienceSection.certificationsTitle}
        </h3>
        <ul>
          <li>
            <strong className="fcc">
              {translations[language].experienceSection.certificationsList[0]}
            </strong>
            <ul>
              {translations[language].experienceSection.certificationsList
                .slice(1)
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
