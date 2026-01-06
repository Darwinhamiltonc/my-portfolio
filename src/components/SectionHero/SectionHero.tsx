import "./SectionHero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SectionHero() {
  return (
    <section className="hero">
      <h2 className="hero-role">Frontend Developer</h2>

      <p className="hero-stack">React · CSS · TypeScript</p>

      <p className="hero-description">
        I specialize in frontend development, building modern, accessible, and
        responsive user interfaces using React, TypeScript, and clean CSS.
      </p>
      <h2 className="hero-social-title">Social</h2>

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
