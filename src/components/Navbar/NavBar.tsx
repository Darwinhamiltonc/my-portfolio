import "./NavBar.css";
import memoji from "../../assets/Pictures/memoji.jpeg";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <nav>
      <div className="me">
        <img src={memoji} alt="Darwin's iOS memoji" className="memoji" />
        <h1 className="title">Darwin Hamilton</h1>
      </div>
      <button
        className="menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="mobile-menu">
          <li>
            <a
              href="/cv-darwin-hamilton.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="Descargar CV"
              onClick={() => setIsOpen(false)}
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="M8 11l4 4 4-4" />
                <path d="M4 21h16" />
              </svg>
              CV
            </a>
          </li>
          <li>
            <button
              className="icon-btn"
              aria-label="Languages"
              onClick={() => setIsOpen(false)}
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />

                <path d="M3 12h18" />
                <path d="M12 3a15 15 0 0 1 0 18" />
                <path d="M12 3a15 15 0 0 0 0 18" />

                <path d="M5 8h14" />
                <path d="M5 16h14" />
              </svg>
              <span className="text">EN / ES</span>
            </button>
          </li>
          <li>
            <a
              href="#contact"
              className="icon-btn"
              aria-label="Contact"
              onClick={() => setIsOpen(false)}
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />

                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default NavBar;
