import "./About.css";
import { translations } from "../../Data/Translations";
import type { Language } from "../../Data/Translations";

type AboutProps = {
  language: Language;
};
function About({ language }: AboutProps) {
  return (
    <section className="about-section">
      <h2 className="about-title">
        {translations[language].aboutMeSection.aboutTitle}
      </h2>
      <p className="about-card-text">
        {translations[language].aboutMeSection.aboutDescription}
      </p>
    </section>
  );
}

export default About;
