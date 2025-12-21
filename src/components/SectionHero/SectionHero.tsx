import "./SectionHero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SectionHero() {
  return (
    <section className="hero">
      <h2 className="hero-role">Software Developer</h2>

      <p className="hero-stack">Frontend · React · CSS · TypeScript</p>

      <p className="hero-description">
        Especializado en desarrollo Frontend, creando interfaces modernas,
        accesibles y responsive con <strong>React</strong>, <strong>CSS</strong>{" "}
        y buenas prácticas.
      </p>
      <h2>Social</h2>

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
