import "./App.css";
import { useState } from "react";
import type { Language } from "./Data/Translations";
import NavBar from "./components/Navbar/NavBar";
import SectionHero from "./components/SectionHero/SectionHero";
import Projects from "./components/Projects/Projects";

function App() {
  const [language, SetLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    SetLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <>
      <header className="p-header">
        <NavBar onToggleLanguage={toggleLanguage} language={language} />
      </header>
      <main>
        <SectionHero language={language} />
        <Projects />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
