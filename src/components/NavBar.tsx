import "./NavBar.css";
import memoji from "../assets/Pictures/memoji.jpeg";
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
        {
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
        }
      </button>

      {isOpen && (
        <ul className="mobile-menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default NavBar;
