import "./SectionHero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { translations } from "../../Data/Translations";
import type { Language } from "../../Data/Translations";

type HeroProps = {
  language: Language;
};

function SectionHero({ language }: HeroProps) {
  return (
    <section className="hero">
      <h2 className="hero-role">
        {translations[language].heroSection.heroRol}
      </h2>

      <p className="hero-stack">
        {translations[language].heroSection.heroStack}
      </p>

      <p className="hero-description">
        {translations[language].heroSection.heroDescription}
      </p>
      <h2 className="hero-social-title">
        {translations[language].heroSection.heroSocialTitle}
      </h2>

      <div className="hero-socials">
        <a
          href="https://www.linkedin.com/in/darwinhamilton"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.github.com/darwinhamiltonc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default SectionHero;
