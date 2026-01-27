import "./App.css";
import { useState, useEffect } from "react";
import type { Language } from "./Data/Translations";
import NavBar from "./components/Navbar/NavBar";
import SectionHero from "./components/SectionHero/SectionHero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  const [language, SetLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    SetLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  useEffect(() => {
    alert(
      "This web is still in progress, but don't worry everything will be done soon😼",
    );
  }, []);
  return (
    <>
      <header className="p-header">
        <NavBar onToggleLanguage={toggleLanguage} language={language} />
      </header>
      <main>
        <SectionHero language={language} />
        <Projects />
        <About language={language} />
        <Skills />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
