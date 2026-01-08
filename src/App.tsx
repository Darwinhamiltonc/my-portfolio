import "./App.css";
import { useState } from "react";
import { translations } from "./Data/Translations";
import type { Translations, Language } from "./Data/Translations";
import NavBar from "./components/Navbar/NavBar";
import SectionHero from "./components/SectionHero/SectionHero";
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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
